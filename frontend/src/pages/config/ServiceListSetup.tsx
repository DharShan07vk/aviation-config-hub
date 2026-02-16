import { ServiceForm } from "@/components/config/ServiceForm";

const ServiceListSetup = () => (
  <div className="max-w-4xl mx-auto space-y-6 pb-10">
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold tracking-tight">Service List Setup</h2>
      <p className="text-muted-foreground">
        Define maintenance tasks and services.
      </p>
    </div>
    <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
      <ServiceForm />
    </div>
  </div>
);

export default ServiceListSetup;
