import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { videos } from "@/src/data";
import Link from "next/link";

export default async function Page(props: {
  params: Promise<{ videoId: string, lessonId: string }>;
}) {
  const params = await props.params;

  const video = videos.find((video) => video.id === params.videoId);
  const lecon = video?.lecons.find((lecon) => lecon.id === params.lessonId);

  if (!lecon) {
    return <p>invalid lesson</p>;
  }
  return (

      <Card>
        <CardHeader>
          <CardTitle>{lecon.titre}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
        </CardContent>
        <CardFooter>
          <Link href={`/formation/${video?.id}`}>Back</Link>
        </CardFooter>
      </Card>
  );
}
