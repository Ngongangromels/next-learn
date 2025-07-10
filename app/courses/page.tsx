import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { PageLayout } from "@/src/Layout";
import prisma from "@/src/lib/prisma";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import { SelectStar } from "./select-star";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";
import { Skeleton } from "@/src/components/ui/skeleton";
import { UpdateTitleForm } from "./edit-title";

export default async function Page() {
  const userAgentList = userAgent({
    headers: await headers(),
  });

  const reviews = await prisma.review.findMany();
  const setNewStar = async (reviewId: string, star: number) => {
    "use server";

    await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        star,
      },
    });

    revalidatePath("/courses");
  };

  const setReviewName = async (reviewId: string, name: string) => {
    "use server";

    await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        name: name,
      },
    });

    revalidatePath("/courses");
  };

  return (
    <PageLayout>
      <Card>
        <CardHeader>
          <CardTitle>Courses !</CardTitle>
          <CardDescription>{userAgentList.browser.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-1">
                    <SelectStar
                      setNewStar={setNewStar.bind(null, review.id)}
                      star={review.star}
                    />
                  </div>
                  <UpdateTitleForm className="text-lg font-bold" setTile={setReviewName.bind(null, review.id)}>{review.name}</UpdateTitleForm>
                </CardHeader>
                <CardContent>
                  <p>{review.review}</p>
                </CardContent>
              </Card>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <Suspense fallback={<Skeleton className="w-full h-10"/>}>
            <LongLoadingComponent/>
        </Suspense>
      </Card>
    </PageLayout>
  );
}

const LongLoadingComponent = async () => {
    const reviews = await prisma.review.count()
    return <p>{reviews}</p>
}
