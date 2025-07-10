
import { SafeError } from "@/src/lib/safe-action-client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import z from 'zod';

const Schema = z.object({
    name: z.string(),
    review: z.string()
})

export const GET = async (resquest: NextRequest) => {
    const reviews = await prisma.review.findMany()

    return NextResponse.json({ reviews })
}

export const POST = async (request: NextRequest) => {
  const input = await request.json();
  const body = Schema.parse(input)

  if (body.name === "mechant") {
    throw new SafeError("Invalid name");
  }
  const newReview = await prisma.review.create({
    data: {
      review: body.review,
      name: body.name,
      star: 5,
    },
  });
  return NextResponse.json({
    review: newReview,
  });
};
