import { supabase } from "./supabase";

export function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export function signUp(email, password, fullName) {
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
}

export function resetPasswordForEmail(email) {
  return supabase.auth.resetPasswordForEmail(email);
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
