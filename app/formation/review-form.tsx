"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { addReviewSafeAction } from "./review-action";

import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { ReviewFormSchema } from "./review-schema";

export const ReviewForm = () => {
  const route = useRouter();
  const { executeAsync, } =
    useAction(addReviewSafeAction);

  const form = useForm<z.infer<typeof ReviewFormSchema>>({
    resolver: zodResolver(ReviewFormSchema),
    defaultValues: {
      name: "",
      review: "",
    },
  });

  // const updateReview = async (obj: {name: string; review: string}) => {
  //     const result = await fetch("/api/review", {
  //         method: "POST",
  //         body: JSON.stringify(obj)
  //     }).then((res) => res.json())

  //     route.refresh()
  // }
  function onSubmit(values: z.infer<typeof ReviewFormSchema>) {
    executeAsync(values);
    route.refresh();
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="romels" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>review</FormLabel>
              <FormControl>
                <Input placeholder="I love your course" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
