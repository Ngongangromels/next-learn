"use server";

import prisma from "@/src/lib/prisma";
import { z  } from "zod";
import { actionClient, SafeError } from "@/src/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import { ReviewFormSchema } from "./review-schema";

// export const addReviewAction = async (formData: FormData) => {
//   const name = formData.get("name") as string;
//   const review = formData.get("review") as string;
//   console.log(name, review);
//   await prisma.review.create({
//     data: {
//       review: review,
//       name: name,
//       star: 5,
//     },
//   });
//   revalidatePath("/");
// };


export const addReviewSafeAction = actionClient.schema(ReviewFormSchema).action(async ({ parsedInput }: { parsedInput: z.infer<typeof ReviewFormSchema> }) => {
    const { name, review } = parsedInput;
    if(name === "mechant") {
        throw new SafeError("invalid name")
    }
    const newReview =  await prisma.review.create({
      data: {
        review: review,
        name: name,
        star: 5,
      },
    });
    revalidatePath("/");

    return newReview
  }
);