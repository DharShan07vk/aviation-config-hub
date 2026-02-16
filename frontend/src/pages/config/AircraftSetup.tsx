import { AircraftForm } from "@/components/config/AircraftForm";

const AircraftSetup = () => (
  <div className="max-w-4xl mx-auto space-y-6 pb-10">
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold tracking-tight">Aircraft Setup</h2>
      <p className="text-muted-foreground">
        Configure aircraft details, APU, and landing gears.
      </p>
    </div>
    <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
      <AircraftForm />
    </div>
  </div>
);

export default AircraftSetup;
