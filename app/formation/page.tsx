import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { videos } from "@/src/data";
import Link from "next/link";


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const video = videos
 
  return video.map((video) => (
   { videoId: video.id}
  ))
}

export default async function Page() {
  await new Promise((resoleve) => setTimeout(resoleve, 3000));
  return (

      <Card>
        <CardHeader>
          <CardTitle>Plan de formation</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/formation/${video.id}`}
              className="text-indigo-500 underline"
            >
              {video.titre}
            </Link>
          ))}
        </CardContent>
      </Card>

  );
}
