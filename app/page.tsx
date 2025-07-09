import { ModeToggle } from "@/src/components/ui/theme-toggle";
import { PageLayout } from "@/src/Layout";
import Link from "next/link";


export default function Home() {
  return (
    <PageLayout>
      <p className="text-center">learn next js</p>
      <ModeToggle />
        <Link href="/formation" className="text-indigo-500 underline">
          Fundamentals
        </Link>
      </PageLayout>
  );
}
