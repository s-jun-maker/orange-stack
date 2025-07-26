"use client";

import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, type FormState } from "@/lib/contact";
import { useEffect, useRef } from "react";

const initialState: FormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <Card className="p-8">
      <CardContent className="p-0">
        {state.message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              state.success
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {state.message}
          </div>
        )}

        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                className={state.errors?.firstName ? "border-red-500" : ""}
              />
              {state.errors?.firstName && (
                <p className="text-sm text-red-500">{state.errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className={state.errors?.email ? "border-red-500" : ""}
            />
            {state.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="How can we help you?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project or question..."
              className={`resize-none ${state.errors?.message ? "border-red-500" : ""}`}
            />
            {state.errors?.message && (
              <p className="text-sm text-red-500">{state.errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}