import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";  
import Link from "next/link";

export default async function NotFound() {
  return (
    <Card>
      <CardHeader>
       <CardTitle>404</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CardDescription>Lessons not found </CardDescription>
      </CardContent>
      <CardFooter>
        <Link href="/formation">Back to /formations</Link>
      </CardFooter>
    </Card>
  );
}
