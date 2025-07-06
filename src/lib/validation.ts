
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// URL parameter validation
export const validateRouteId = (id: string | undefined): number | null => {
  if (!id) return null;
  
  const numId = parseInt(id, 10);
  
  // Check if it's a valid number and within reasonable bounds
  if (isNaN(numId) || numId < 1 || numId > 9999) {
    return null;
  }
  
  return numId;
};
