import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { ModeToggle } from "@/src/components/ui/theme-toggle";
import { PageLayout } from "@/src/Layout";
import prisma from "@/src/lib/prisma";
import Link from "next/link";
import { SelectStar } from "../courses/select-star";
import { UpdateTitleForm } from "../courses/edit-title";
import { Button } from "@/src/components/ui/button";
import { revalidatePath } from "next/cache";
import { X } from "lucide-react";
import { ReviewForm } from "../formation/review-form";




export default async function Home() {

  const reviews = await prisma.review.findMany()
   
  const changeStar = async (reviewId: string, star: number) => {
    "use server" 
    await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        star: star
      }
    })
    revalidatePath("/")
  }
  const changeName = async (reviewId: string, name: string) => {
    "use server";
    await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        name: name
      },
    });
    revalidatePath("/");
  };
  return (
    <PageLayout>
      <p className="text-center">learn next js</p>
      <ModeToggle />
      <Link href="/formation" className="text-indigo-500 underline">
        Fundamentals
      </Link>
      <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="relative">
              <div className="absolute right-4 top-4">
                <form action="">
                   <Button 
                    formAction={async () => {
                      "use server"

                      await prisma.review.delete({
                        where: {
                          id: review.id
                        }
                      })
                      revalidatePath("/")
                    }}
                   size="sm" variant="outline">
                    <X/>
                   </Button>
                </form>
              </div>
              <CardHeader>
                <div className="flex items-center gap-1 mb-1">
                  <SelectStar setNewStar={changeStar.bind(null, review.id)} star={review.star} />
                </div>
                <UpdateTitleForm setTile={changeName.bind(null, review.id)} className="text-lg font-bold">
                  {review.name}
                </UpdateTitleForm>
              </CardHeader>
              <CardContent>
                <p>{review.review}</p>
              </CardContent>
            </Card>
          ))}
      </div>
      <Card className="px-4">
        <ReviewForm/>
      </Card>
    </PageLayout>
  );
}
