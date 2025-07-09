import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";

export default async function Loading() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-10 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
      </CardHeader>
      <CardContent className="flex flex-col gap-4"></CardContent>
      <CardFooter>
        <Skeleton className="h-16 w-full"></Skeleton>
      </CardFooter>
    </Card>
  );
}
