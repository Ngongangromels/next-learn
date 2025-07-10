import z from "zod";

export  const ReviewFormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  review: z.string().min(10).max(500)
});