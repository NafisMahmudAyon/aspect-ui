import { Card, CardContent, CardTitle, CardDescription } from "@/app/src";

export default function SimpleCard() {
  return (
    <Card className="max-w-md">
      <CardContent className="p-6">
        <CardTitle>Aspect UI design system</CardTitle>
        <CardDescription>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </CardDescription>
      </CardContent>
    </Card>
  );
}