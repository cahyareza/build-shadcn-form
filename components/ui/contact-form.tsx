"use client"

import { Toaster, toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DatetimePicker } from "@/components/ui/datetime-picker"
import { formSchema } from "@/lib/schema"

export default function MyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      datetime: new Date()
    },
  })

  async function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(res => res.json());

      if (response.error) {
        throw new Error(response.error);
      }

      form.reset();
      toast("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Card className="max-w-lg mx-auto">
        <Toaster />
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
                    
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="shadcn"
                            
                            type=""
                            {...field} />
                        </FormControl>
                        <FormDescription>This is your public display name.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="example@gmail.com"
                            
                            type=""
                            {...field} />
                        </FormControl>
                        <FormDescription>This is your public display name.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    
                <FormField
                control={form.control}
                name="datetime"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Submission Date</FormLabel>
                    <DatetimePicker
                        {...field}
                        format={[
                        ["months", "days", "years"],
                        ["hours", "minutes", "am/pm"],
                        ]}
                    />
                <FormDescription>Add the date of submission with detailly.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  )
}