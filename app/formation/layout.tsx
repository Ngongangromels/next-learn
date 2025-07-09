import { PageLayout } from "@/src/Layout";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout(prop: PropsWithChildren) {
    return (
      <PageLayout>
        <div>
          <header className="border-b -mx-4 pb-2">
            <Link href="/formation" className="font-bold">/Formation</Link>
          </header>
          {prop.children}
        </div>
      </PageLayout>
    );
}