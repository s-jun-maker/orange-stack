"use server";

import { contactMessagesTable, db } from "@/db";

export interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  subject?: string;
  message: string;
}

export interface FormState {
  success: boolean;
  message: string;
  errors?: {
    firstName?: string;
    email?: string;
    message?: string;
  };
}

export async function createContactMessage(data: ContactFormData) {
  try {
    const result = await db
      .insert(contactMessagesTable)
      .values({
        first_name: data.firstName,
        last_name: data.lastName || null,
        email: data.email,
        subject: data.subject || null,
        message: data.message,
      })
      .returning({ id: contactMessagesTable.id });

    return { success: true, id: result[0].id };
  } catch (error) {
    console.error("Failed to create contact message:", error);
    return { success: false, error: "Failed to save message" };
  }
}

function validateContactForm(formData: FormData): {
  isValid: boolean;
  errors: FormState["errors"];
  data?: ContactFormData;
} {
  const errors: FormState["errors"] = {};

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!message?.trim()) {
    errors.message = "Message is required";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    data: isValid
      ? {
          firstName: firstName.trim(),
          lastName: lastName?.trim(),
          email: email.trim(),
          subject: subject?.trim(),
          message: message.trim(),
        }
      : undefined,
  };
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = validateContactForm(formData);

  if (!validation.isValid) {
    return {
      success: false,
      message: "Please correct the errors below",
      errors: validation.errors,
    };
  }

  const result = await createContactMessage(validation.data!);

  if (result.success) {
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } else {
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again.",
    };
  }
}
