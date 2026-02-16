export interface Aircraft {
  id: string;
  model: string;
  msn: string;
  registration_number: string;
  manufacture_date: string | null;
  delivery_date: string | null;
  flight_hours: number;
  flight_cycles: number;
  engines_count: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AircraftComponent {
  id: string;
  aircraft_id: string;
  section: string;
  manufacturer: string | null;
  model: string | null;
  serial_number: string | null;
  part_number: string | null;
  last_shop_visit_date: string | null;
  hours_since_new: number;
  cycles_since_new: number;
  created_at: string;
  updated_at: string;
}

export interface Component {
  id: string;
  manufacturer: string;
  name: string;
  part_number: string;
  cmm_number: string | null;
  classification: string | null;
  classification_date: string | null;
  class_linkage: string | null;
  compatible_aircraft_models: string[] | null;
  estimated_price: number | null;
  quotation_price: number | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  aircraft_model: string;
  task_name: string;
  mpd_amm_task_ids: string | null;
  task_card_ref: string | null;
  description: string | null;
  assigned_component_id: string | null;
  zones: string[] | null;
  estimated_manhours: number | null;
  estimated_price: number | null;
  quotation_price: number | null;
  interval_threshold: number | null;
  repeat_interval: number | null;
  created_at: string;
  updated_at: string;
}
