import { supabase } from "./supabase";

function translateAuthError(error) {
  if (!error) return null;

  const message = String(error.message || "");
  if (/invalid login credentials/i.test(message)) {
    return { ...error, message: "E-mail ou senha incorretos." };
  }
  if (/email not confirmed/i.test(message)) {
    return { ...error, message: "Confirme seu e-mail antes de entrar." };
  }
  if (/failed to fetch|network/i.test(message)) {
    return { ...error, message: "Não foi possível conectar ao servidor. Verifique sua internet." };
  }
  return error;
}

export async function signIn(email, password) {
  try {
    const result = await supabase.auth.signInWithPassword({ email, password });
    if (result.error) return { ...result, error: translateAuthError(result.error) };
    return result;
  } catch (error) {
    return { data: { user: null, session: null }, error: translateAuthError(error) };
  }
}

export async function signUp(email, password, fullName) {
  let result;
  try {
    result = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
  } catch (error) {
    return { data: { user: null, session: null }, error: translateAuthError(error) };
  }

  if (result.error) {
    return { ...result, error: translateAuthError(result.error) };
  }
  if (!result.data?.user) return result;

  if (result.data.session) {
    const { error: profileError } = await supabase
      .from("studyway_profiles")
      .upsert({ id: result.data.user.id, full_name: fullName.trim() });

    if (profileError) {
      return {
        ...result,
        profileError,
        message:
          "A conta foi criada, mas não foi possível salvar o perfil. Confira as migrações e as políticas do Supabase.",
      };
    }
  }

  return result;
}
export async function resetPasswordForEmail(email) {
  try {
    const result = await supabase.auth.resetPasswordForEmail(email);
    if (result.error) return { ...result, error: translateAuthError(result.error) };
    return result;
  } catch (error) {
    return { data: {}, error: translateAuthError(error) };
  }
}

export function signInWithProvider(provider) {
  return supabase.auth.signInWithOAuth({ provider });
}

export function signOut() {
  return supabase.auth.signOut();
}

export function getSession() {
  return supabase.auth.getSession();
}
