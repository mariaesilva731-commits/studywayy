import { supabase } from "./supabase";

export async function getSimulationQuestions(simulationId = null) {
  let query = supabase
    .from("studyway_questions")
    .select("id, simulation_id, subject, prompt, options, sort_order")
    .order("sort_order");

  if (simulationId) query = query.eq("simulation_id", simulationId);
  return query;
}
