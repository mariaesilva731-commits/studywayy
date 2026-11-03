import { supabase } from "./supabase";

export async function getSimulations() {
  return supabase
    .from("studyway_simulations")
    .select("id, title, institution, subject, question_count, duration_minutes")
    .order("sort_order");
}

export async function getSimulationQuestions(simulationId = null) {
  let query = supabase
    .from("studyway_questions")
    .select("id, simulation_id, subject, prompt, options, sort_order")
    .order("sort_order");

  if (simulationId) query = query.eq("simulation_id", simulationId);
  return query;
}
