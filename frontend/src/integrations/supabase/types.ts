export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      aircrafts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          model: string
          msn: string
          registration_number: string
          manufacture_date: string | null
          delivery_date: string | null
          flight_hours: number
          flight_cycles: number
          engines_count: number
          status: string
          country: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          model: string
          msn: string
          registration_number: string
          manufacture_date?: string | null
          delivery_date?: string | null
          flight_hours: number
          flight_cycles: number
          engines_count: number
          status: string
          country?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          model?: string
          msn?: string
          registration_number?: string
          manufacture_date?: string | null
          delivery_date?: string | null
          flight_hours?: number
          flight_cycles?: number
          engines_count?: number
          status?: string
          country?: string | null
        }
        Relationships: []
      }
      aircraft_components: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          aircraft_id: string
          section: string
          manufacturer: string | null
          model: string | null
          serial_number: string | null
          part_number: string | null
          last_shop_visit_date: string | null
          hours_since_new: number | null
          cycles_since_new: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          aircraft_id: string
          section: string
          manufacturer?: string | null
          model?: string | null
          serial_number?: string | null
          part_number?: string | null
          last_shop_visit_date?: string | null
          hours_since_new?: number | null
          cycles_since_new?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          aircraft_id?: string
          section?: string
          manufacturer?: string | null
          model?: string | null
          serial_number?: string | null
          part_number?: string | null
          last_shop_visit_date?: string | null
          hours_since_new?: number | null
          cycles_since_new?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "aircraft_components_aircraft_id_fkey"
            columns: ["aircraft_id"]
            isOneToOne: false
            referencedRelation: "aircrafts"
            referencedColumns: ["id"]
          }
        ]
      }
      components: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          manufacturer: string
          name: string
          part_number: string
          cmm_number: string | null
          classification: string | null
          classification_date: string | null
          class_linkage: string | null
          compatible_aircraft_models: string[] | null
          estimated_price: number | null
          quotation_price: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          manufacturer: string
          name: string
          part_number: string
          cmm_number?: string | null
          classification?: string | null
          classification_date?: string | null
          class_linkage?: string | null
          compatible_aircraft_models?: string[] | null
          estimated_price?: number | null
          quotation_price?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          manufacturer?: string
          name?: string
          part_number?: string
          cmm_number?: string | null
          classification?: string | null
          classification_date?: string | null
          class_linkage?: string | null
          compatible_aircraft_models?: string[] | null
          estimated_price?: number | null
          quotation_price?: number | null
        }
        Relationships: []
      }
      services: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          aircraft_model: string
          task_name: string
          mpd_amm_task_ids: string | null
          task_card_ref: string | null
          description: string | null
          assigned_component_id: string | null
          zones: string[] | null
          estimated_manhours: number | null
          estimated_price: number | null
          quotation_price: number | null
          interval_threshold: number | null
          repeat_interval: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          aircraft_model: string
          task_name: string
          mpd_amm_task_ids?: string | null
          task_card_ref?: string | null
          description?: string | null
          assigned_component_id?: string | null
          zones?: string[] | null
          estimated_manhours?: number | null
          estimated_price?: number | null
          quotation_price?: number | null
          interval_threshold?: number | null
          repeat_interval?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          aircraft_model?: string
          task_name?: string
          mpd_amm_task_ids?: string | null
          task_card_ref?: string | null
          description?: string | null
          assigned_component_id?: string | null
          zones?: string[] | null
          estimated_manhours?: number | null
          estimated_price?: number | null
          quotation_price?: number | null
          interval_threshold?: number | null
          repeat_interval?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "services_assigned_component_id_fkey"
            columns: ["assigned_component_id"]
            isOneToOne: false
            referencedRelation: "components"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
