import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { videos } from "@/src/data";
import Link from "next/link";

export async function generateStaticParams() {
  const video = videos;

  const result = video.flatMap((video) => {
    const  params = video.lecons.map((lesson) => ({
        videoId: video.id,
        lessonId: lesson.id
    }))
    return params
  })

  return result
}
  

export default async function Page(props: {
  params: Promise<{ videoId: string }>;
}) {
  const params = await props.params;

  const video = videos.find((video) => video.id === params.videoId);

  await new Promise((resoleve) => setTimeout(resoleve, 3000));
  if (!video) {
    return <p>invalid video</p>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{video.titre}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ul className="list-disc list-">
          {video.lecons.map((lecon) => (
            <li key={lecon.id}>
              <Link href={`/formation/${video.id}/lessons/${lecon.id}`}>
                {lecon.titre}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/formation">Back</Link>
      </CardFooter>
    </Card>
  );
}
