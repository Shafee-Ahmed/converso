'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"
const formSchema = z.object({
    username: z.string().min(1, { message: "Companion is required." }),
    subject: z.string().min(1, { message: "Subject is required." }),
    topic: z.string().min(1, { message: "Topic is required." }),
    voice: z.string().min(1, { message: "Voice is required." }),
    style: z.string().min(1, { message: "Styles is required." }),
    duration: z.number().min(1, { message: "Duration must be at least 1 minute." }).positive(),
})


const CompanionForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }



    return (
        <main>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8">
                    
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} 
                                   
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="inout capitalize">
                                            <SelectValue placeholder="Select the subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {subjects.map((subject)=>(
                                                <SelectItem 
                                                    value={subject}
                                                    key={subject}
                                                    className="capitalize"
                                                >
                                                    {subject}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    The subject you want your Companion to be good at
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Topic</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex. Derivatives & Integerals" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The topic the companion will have knowledge in
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="voice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Voice</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input capitalize">
                                            <SelectValue placeholder="Select the voice gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem
                                            value="male"
                                          >
                                            Male
                                          </SelectItem>
                                          <SelectItem
                                            value="female"
                                          >
                                            Female
                                          </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    The voice of your companion
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                     <FormField
                        control={form.control}
                        name="style"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Style</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input capitalize">
                                            <SelectValue placeholder="Style of the voice" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem
                                            value="male"
                                          >
                                           Formal
                                          </SelectItem>
                                          <SelectItem
                                            value="female"
                                          >
                                           Informal
                                          </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    The voice of your companion
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Duration</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number"
                                    placeholder="15" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Amount of time you want
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </main>
    )
}

export default CompanionForm
