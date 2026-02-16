export const supabase = new Proxy({}, {
  get: () => { throw new Error("Supabase is removed. Use api from @/lib/api"); }
});