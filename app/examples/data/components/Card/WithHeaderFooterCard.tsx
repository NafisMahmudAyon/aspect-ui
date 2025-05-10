import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button
} from "@/app/src";

export default function WithHeaderFooterCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your new project will be available to all team members.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}