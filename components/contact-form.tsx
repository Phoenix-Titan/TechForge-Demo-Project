"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// The options shown in the "Inquiry Type" dropdown.
const inquiryTypes = [
  "Custom PC Build Inquiry",
  "Technical Support",
  "Enterprise Sales",
  "Warranty Claim",
];

/**
 * ContactForm — a self-contained, validated contact form.
 *
 * It keeps each field in local state, runs light validation on submit, and
 * shows a success panel afterwards. There's no backend here, so submission is
 * simulated — wire `handleSubmit` to an API route or Server Action to go live.
 */
export function ContactForm() {
  // One piece of state per field.
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState(inquiryTypes[0]);
  const [message, setMessage] = useState("");
  // Flips to true once the form is submitted successfully.
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser's full-page reload

    // Basic guard: name + email are required (the input `required` attrs also
    // enforce this in the browser).
    if (!fullName.trim() || !email.trim()) return;

    // 👉 Replace this with a real API call / Server Action to send the message.
    console.log("Contact form submitted:", { fullName, email, inquiry, message });

    setIsSubmitted(true);
  }

  // Success state shown after submitting.
  if (isSubmitted) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-2xl p-12 text-center glass">
        <CheckCircle2 className="size-16 text-primary" />
        <h2 className="font-display text-2xl font-semibold">Message Transmitted</h2>
        <p className="text-on-surface-variant">
          Thanks, {fullName.split(" ")[0]}! Our specialists will get back to you
          within one business day.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl p-8 glass md:p-12">
      {/* Soft glow accent in the corner */}
      <div className="absolute right-0 top-0 -z-10 size-32 bg-primary/10 blur-[60px]" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + email side by side on larger screens */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              required
              placeholder="John Doe"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="john@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        {/* Inquiry type dropdown */}
        <div className="space-y-2">
          <Label htmlFor="inquiry">Inquiry Type</Label>
          <Select value={inquiry} onValueChange={setInquiry}>
            <SelectTrigger id="inquiry">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us about your project or issue..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full glow-hover">
          <Send className="size-4" />
          Transmit Message
        </Button>
      </form>
    </div>
  );
}
