import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { componentSchema, ComponentFormData } from "./ComponentFormSchema";
import { useNavigate } from "react-router-dom";
import { MultiSelect, Option } from "@/components/ui/multi-select";

export function ComponentForm() {
    const [loading, setLoading] = useState(false);
    const [aircraftModels, setAircraftModels] = useState<Option[]>([]);
    const navigate = useNavigate();

    const form = useForm<ComponentFormData>({
        resolver: zodResolver(componentSchema),
        defaultValues: {
            compatible_aircraft_models: [],
        },
    });

    useEffect(() => {
        fetchAircraftModels();
    }, []);

    const fetchAircraftModels = async () => {
        try {
            const data = await api.aircrafts.list(); // Assuming api.aircrafts.list() returns an array of aircraft objects with a 'model' property

            // Extract unique models
            const uniqueModels = Array.from(new Set((data as any[]).map((a: any) => a.model))).map(
                (model: unknown) => ({
                    label: model as string,
                    value: model as string,
                })
            );
            setAircraftModels(uniqueModels);
        } catch (error) {
            console.error("Error fetching aircraft models:", error);
            toast.error("Failed to fetch aircraft models.");
        }
    };

    async function onSubmit(data: ComponentFormData) {
        setLoading(true);
        try {
            await api.components.create(data);

            toast.success("Component saved successfully");
            navigate("/dashboard"); // Or stay on page? Navigate for now.
        } catch (error: any) {
            console.error("Error saving component:", error);
            toast.error(error.message || "Failed to save component");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="manufacturer"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Component Manufacturer</FormLabel>
                                <div className="col-span-3">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select manufacturer" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="manufacturer1">Manufacturer A</SelectItem>
                                            <SelectItem value="manufacturer2">Manufacturer B</SelectItem>
                                            <SelectItem value="manufacturer3">Manufacturer C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Component Name</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirm_name"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Confirm Component Name</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="part_number"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Part No</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirm_part_number"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Confirm Part No</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cmm_number"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">CMM No</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirm_cmm_number"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Confirm CMM No</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="classification"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Component Classification</FormLabel>
                                <div className="col-span-3">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select classification" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="class1">Class 1</SelectItem>
                                            <SelectItem value="class2">Class 2</SelectItem>
                                            <SelectItem value="class3">Class 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="classification_date"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Classification Date</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="class_linkage"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Component Class Linkage</FormLabel>
                                <div className="col-span-3">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select class linkage" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="linkage1">Linkage A</SelectItem>
                                            <SelectItem value="linkage2">Linkage B</SelectItem>
                                            <SelectItem value="linkage3">Linkage C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="compatible_aircraft_models"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Compatible Aircraft Models</FormLabel>
                                <div className="col-span-3">
                                    <FormControl>
                                        <MultiSelect
                                            options={aircraftModels}
                                            selected={field.value}
                                            onChange={field.onChange}
                                            placeholder="Select aircraft models"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="estimated_price"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Estimated Price</FormLabel>
                                <div className="col-span-3">
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select estimated price" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="price1">0 - 1000</SelectItem>
                                            <SelectItem value="price2">1000 - 5000</SelectItem>
                                            <SelectItem value="price3">5000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quotation_price"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4 space-y-0">
                                <FormLabel className="text-right">Quotation Price</FormLabel>
                                <div className="col-span-3">
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select quotation price" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="quote1">Standard Quote</SelectItem>
                                            <SelectItem value="quote2">Premium Quote</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <Button variant="outline" type="button" onClick={() => navigate("/dashboard")}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Saving..." : "Save Component"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
