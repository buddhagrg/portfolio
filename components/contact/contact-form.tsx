"use client";

import React from "react";
import { Send } from "lucide-react";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { ContactFormAlert } from "./contact-form-alert";
import { useSendMessage } from "../../hooks/use-send-message";

export const ContactForm = () => {
  const { state, sendMessage } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await sendMessage(formData);

    if (state.success) {
      form.reset();
    }
  };

  const iconClass = `size-6 md:size-4`;
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-xl font-medium mb-5">Contact Form</h4>

      <div className="flex flex-col gap-y-2">
        <div className="mb-3 space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="mb-3 space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="mb-3 space-y-1">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-ring flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            )}
            required
          />
        </div>

        {!state.loading && state.message && (
          <div className="mb-1">
            <ContactFormAlert success={state.success} message={state.message} />
          </div>
        )}

        <Button className="space-x-1" disabled={state.loading}>
          {!state.loading && <Send className={iconClass} />}
          <span>{state.loading ? `Sending Message` : `Send Message`}</span>
        </Button>
      </div>
    </form>
  );
};
