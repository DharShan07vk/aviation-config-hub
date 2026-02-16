import { ComponentForm } from "@/components/config/ComponentForm";

const ComponentListSetup = () => (
  <div className="max-w-4xl mx-auto space-y-6 pb-10">
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold tracking-tight">Component List Setup</h2>
      <p className="text-muted-foreground">
        Add new components to the catalog.
      </p>
    </div>
    <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
      <ComponentForm />
    </div>
  </div>
);

export default ComponentListSetup;
