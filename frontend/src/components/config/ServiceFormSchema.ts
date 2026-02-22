import { z } from "zod";

const requiredString = z.string().min(1, "This field is required");

export const serviceSchema = z.object({
    aircraft_model: requiredString,
    task_name: requiredString,
    mpd_amm_task_ids: z.string().optional(),
    task_card_ref: z.string().optional(),
    assigned_component_id: z.string().optional(),
    zones: z.array(z.string()).optional(),
    estimated_manhours: z.coerce.number().min(0).optional(),
    estimated_price: z.coerce.number().min(0).optional(),
    quotation_price: z.coerce.number().min(0).optional(),
    interval_threshold: z.coerce.number().min(0).optional(),
    interval_threshold_unit: z.string().optional(),
    repeat_interval: z.coerce.number().min(0).optional(),
    repeat_interval_unit: z.string().optional(),
    currency: z.string().optional(),
});

export type ServiceFormData = z.infer<typeof serviceSchema>;
