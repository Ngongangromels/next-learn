import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { PageLayout } from "@/src/Layout";
import { SignUpForm } from "./signup-form";

export default function SignUpPage() {
    return (
      <PageLayout>
        <Card>
            <CardHeader>
                <CardTitle>
                    Sign up
                </CardTitle>
            </CardHeader>
            <CardContent>
              <SignUpForm/>
            </CardContent>
        </Card>
      </PageLayout>
    )
}