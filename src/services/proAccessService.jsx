import { supabase } from "./supabase";

export const PRO_SUBSCRIPTION_PLANS = {
  monthly: {
    id: "monthly",
    name: "Plano mensal",
    monthlyPrice: "R$ 99,90",
    billingPrice: "R$ 99,90 / mês",
    billingDescription: "Pagamento e renovação mensal.",
  },
  annual: {
    id: "annual",
    name: "Plano anual",
    monthlyPrice: "R$ 99,90",
    billingPrice: "R$ 1.198,80 / ano",
    billingDescription: "Pagamento único anual. Acesso por 12 meses.",
  },
};

const CHECKOUT_FUNCTION = "studyway-create-checkout";
const CHECKOUT_ENABLED =
  process.env.EXPO_PUBLIC_STUDYWAY_CHECKOUT_ENABLED === "true";

export async function getProAccess(userId) {
  if (!userId) return { data: { isPro: false, subscription: null }, error: null };

  try {
    const { data, error } = await supabase
      .from("studyway_subscriptions")
      .select(
        "plan_id,status,current_period_end,cancel_at_period_end,updated_at",
      )
      .eq("user_id", userId)
      .eq("status", "active")
      .gt("current_period_end", new Date().toISOString())
      .maybeSingle();

    if (error) return { data: { isPro: false, subscription: null }, error };
    return {
      data: {
        isPro: Boolean(data),
        subscription: data,
      },
      error: null,
    };
  } catch (error) {
    return { data: { isPro: false, subscription: null }, error };
  }
}

export async function startSubscriptionCheckout(planId, userId) {
  if (!PRO_SUBSCRIPTION_PLANS[planId]) {
    return {
      data: null,
      error: { code: "INVALID_PLAN", message: "Plano de assinatura inválido." },
    };
  }
  if (!userId) {
    return {
      data: null,
      error: {
        code: "AUTH_REQUIRED",
        message: "Entre na sua conta antes de assinar.",
      },
    };
  }
  if (!CHECKOUT_ENABLED) {
    return {
      data: null,
      error: {
        code: "PAYMENT_NOT_CONFIGURED",
        message: "O pagamento online ainda não está configurado.",
      },
    };
  }

  const { data, error } = await supabase.functions.invoke(CHECKOUT_FUNCTION, {
    body: { planId },
  });
  if (error) return { data: null, error };

  let checkoutUrl;
  try {
    checkoutUrl = new URL(data?.checkoutUrl);
  } catch {
    return {
      data: null,
      error: {
        code: "INVALID_CHECKOUT_URL",
        message: "O serviço de pagamento retornou um endereço inválido.",
      },
    };
  }
  if (checkoutUrl.protocol !== "https:") {
    return {
      data: null,
      error: {
        code: "INVALID_CHECKOUT_URL",
        message: "O serviço de pagamento retornou um endereço inválido.",
      },
    };
  }

  return { data: { checkoutUrl: checkoutUrl.toString() }, error: null };
}
