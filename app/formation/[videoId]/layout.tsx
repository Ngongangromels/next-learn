import Link from "next/link";
import { PropsWithChildren } from "react";

export default async function Layout(prop: PropsWithChildren<{params: Promise<{videoId: string}>}>) {
    const params = await prop.params
    return (
      <div>
        <div>
          <header className="border-b -mx-4 px-4 pb-2 mb-4">
            <Link href="/formation" className="font-bold">/Formation/{params.videoId}</Link>
          </header>
          {prop.children}
        </div>
      </div>
    );
}