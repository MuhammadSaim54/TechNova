import React, { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, MapPin } from "lucide-react";

// Shadcn Primitives
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { Checkbox } from "@/src/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
import { Button } from "@/src/components/ui/button";

const INITIAL_FORM_STATE = {
    fullName: "",
    email: "",
    service: "",
    message: "",
    termsAccepted: false,
};

export default function Contact() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Native input & textarea handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    // Custom Radix handler (Select & Checkbox)
    const handleCustomChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    // Validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.service) {
            newErrors.service = "Please select a service category.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty.";
        } else if (formData.message.trim().length < 15) {
            newErrors.message = "Message must be at least 15 characters long.";
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = "You must accept the terms.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success("Message received! The TechNova team will follow up shortly.");
            setFormData(INITIAL_FORM_STATE);
            setErrors({});
        } catch (err) {
            toast.error("An error occurred while submitting. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* 2-Column Professional Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

                {/* LEFT COLUMN: Production Form */}
                <div className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                                Full Name
                            </Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Alex Vance"
                                className={`h-12 rounded-xl bg-background/50 border-input transition-all ${errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""
                                    }`}
                            />
                            {errors.fullName && (
                                <p className="text-xs text-destructive font-medium">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="alex@technova.com"
                                className={`h-12 rounded-xl bg-background/50 border-input transition-all ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-xs text-destructive font-medium">{errors.email}</p>
                            )}
                        </div>

                        {/* Target Service Select */}
                        <div className="space-y-2">
                            <Label htmlFor="service" className="text-sm font-medium text-foreground">
                                Target Service
                            </Label>
                            <Select
                                value={formData.service}
                                onValueChange={(val) => handleCustomChange("service", val)}
                            >
                                <SelectTrigger
                                    id="service"
                                    className={`h-12 w-full rounded-xl bg-background/50 border-input transition-all px-4 text-sm focus:ring-2 focus:ring-primary/30 ${errors.service ? "border-destructive focus:ring-destructive" : ""
                                        }`}
                                >
                                    <SelectValue placeholder="Choose a domain..." />
                                </SelectTrigger>

                                {/* w-[--radix-select-trigger-width] forces exact trigger width */}
                                <SelectContent
                                    position="popper"
                                    className="w-[--radix-select-trigger-width] min-w-[280px] rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-1.5 shadow-2xl z-50 animate-in fade-in-80 zoom-in-95"
                                >
                                    <SelectItem
                                        value="web-dev"
                                        className="rounded-xl px-3.5 py-2.5 text-sm cursor-pointer transition-colors focus:bg-primary focus:text-primary-foreground font-medium my-0.5"
                                    >
                                        Full-Stack Web Development
                                    </SelectItem>

                                    <SelectItem
                                        value="ui-ux"
                                        className="rounded-xl px-3.5 py-2.5 text-sm cursor-pointer transition-colors focus:bg-primary focus:text-primary-foreground font-medium my-0.5"
                                    >
                                        UI/UX Systems & Design
                                    </SelectItem>

                                    <SelectItem
                                        value="cloud"
                                        className="rounded-xl px-3.5 py-2.5 text-sm cursor-pointer transition-colors focus:bg-primary focus:text-primary-foreground font-medium my-0.5"
                                    >
                                        Cloud Architecture & DevOps
                                    </SelectItem>

                                    <SelectItem
                                        value="consulting"
                                        className="rounded-xl px-3.5 py-2.5 text-sm cursor-pointer transition-colors focus:bg-primary focus:text-primary-foreground font-medium my-0.5"
                                    >
                                        Technical Architecture Advisory
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.service && (
                                <p className="text-xs text-destructive font-medium">{errors.service}</p>
                            )}
                        </div>

                        {/* Project Overview */}
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm font-medium text-foreground">
                                Project Overview
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Share your goals, requirements, or timeline..."
                                className={`rounded-xl bg-background/50 border-input transition-all resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""
                                    }`}
                            />
                            {errors.message && (
                                <p className="text-xs text-destructive font-medium">{errors.message}</p>
                            )}
                        </div>

                        {/* Terms Checkbox */}
                        <div className="space-y-1.5 pt-1">
                            <div className="flex items-center space-x-2.5">
                                <Checkbox
                                    id="terms"
                                    checked={formData.termsAccepted}
                                    onCheckedChange={(checked) => handleCustomChange("termsAccepted", !!checked)}
                                />
                                <Label
                                    htmlFor="terms"
                                    className="text-xs sm:text-sm text-muted-foreground leading-none cursor-pointer"
                                >
                                    I agree to the privacy policy and consent to technical communication.
                                </Label>
                            </div>
                            {errors.termsAccepted && (
                                <p className="text-xs text-destructive font-medium">{errors.termsAccepted}</p>
                            )}
                        </div>

                        {/* Send Button */}
                        <div className="pt-2">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto min-w-[160px] h-11 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* RIGHT COLUMN: Map / Visual Location Card */}
                <div className="w-full h-full min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-border bg-card relative shadow-xl flex items-center justify-center">
                    {/* If you have the image from image 2 saved in assets (e.g., map.png or contact-map.png) */}
                    <iframe
                        title="TechNova Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.54145942475!2d74.2437599352934!3d31.520369599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        className="w-full h-full border-0 absolute inset-0 filter contrast-[0.95] opacity-90 dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-[1.2]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Floating Brand Badge like the second image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center gap-1.5 animate-bounce duration-1000">
                        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl ring-4 ring-background">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-md text-foreground text-xs font-semibold shadow-md border border-border">
                            TechNova HQ
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}