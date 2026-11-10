import { supabase } from "./supabase";

async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  return { user: data?.user || null, error };
}

export async function getUserProfile() {
  const { user, error: authError } = await getCurrentUser();
  if (authError || !user) return { data: null, error: authError };

  const result = await supabase
    .from("studyway_profiles")
    .select("id, full_name, institution")
    .eq("id", user.id)
    .maybeSingle();

  if (result.error) return result;

  const fullName = user.user_metadata?.full_name?.trim() || "";
  if (result.data?.full_name?.trim() || (result.data && !fullName)) {
    return result;
  }

  return supabase
    .from("studyway_profiles")
    .upsert({
      id: user.id,
      full_name: fullName,
    })
    .select("id, full_name, institution")
    .single();
}

export async function updateUserProfile(updates) {
  const { user, error } = await getCurrentUser();
  if (error || !user) return { data: null, error };

  return supabase
    .from("studyway_profiles")
    .upsert({ id: user.id, ...updates, updated_at: new Date().toISOString() })
    .select("id, full_name, institution")
    .single();
}

export async function getUserPreferences() {
  const { user, error } = await getCurrentUser();
  if (error || !user) return { data: null, error };

  const result = await supabase
    .from("studyway_preferences")
    .select("notifications_enabled")
    .eq("user_id", user.id)
    .maybeSingle();

  if (result.error || result.data) return result;
  return supabase
    .from("studyway_preferences")
    .upsert({ user_id: user.id })
    .select("notifications_enabled")
    .single();
}

export async function updateUserPreferences(updates) {
  const { user, error } = await getCurrentUser();
  if (error || !user) return { data: null, error };

  return supabase
    .from("studyway_preferences")
    .upsert({ user_id: user.id, ...updates, updated_at: new Date().toISOString() })
    .select("notifications_enabled")
    .single();
}
