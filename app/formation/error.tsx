"use client";

import { Alert, AlertTitle } from "@/src/components/ui/alert";
import { TriangleAlert } from "lucide-react";

export default function Error() {
  return (
    <Alert>
      <TriangleAlert size={16} />
      <AlertTitle>Unexpected error accured beautifull application</AlertTitle>
    </Alert>
  );
}
