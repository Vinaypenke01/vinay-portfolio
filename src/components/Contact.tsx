import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted:", data);
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
    };

    return (
        <section id="contact-form" className="py-24 md:py-32 bg-secondary/30">
            <div className="max-w-[800px] mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-sans font-medium tracking-widest uppercase">
                        Contact
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground leading-tight">
                        Get in touch
                    </h2>
                    <p className="mt-6 text-muted-foreground font-sans leading-relaxed">
                        Have a project in mind? Let's talk about how we can work together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-sans font-medium text-foreground">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    {...form.register("name")}
                                    className={form.formState.errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                                />
                                {form.formState.errors.name && (
                                    <p className="text-xs text-destructive font-sans">{form.formState.errors.name.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-sans font-medium text-foreground">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    {...form.register("email")}
                                    className={form.formState.errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                                />
                                {form.formState.errors.email && (
                                    <p className="text-xs text-destructive font-sans">{form.formState.errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-sans font-medium text-foreground">
                                Subject
                            </label>
                            <Input
                                id="subject"
                                placeholder="How can I help?"
                                {...form.register("subject")}
                                className={form.formState.errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {form.formState.errors.subject && (
                                <p className="text-xs text-destructive font-sans">{form.formState.errors.subject.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-sans font-medium text-foreground">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Tell me more about your project..."
                                rows={6}
                                {...form.register("message")}
                                className={form.formState.errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {form.formState.errors.message && (
                                <p className="text-xs text-destructive font-sans">{form.formState.errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 rounded-full font-sans tracking-wide bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
