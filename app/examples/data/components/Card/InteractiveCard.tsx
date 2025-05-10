'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/app/src";
import { Button } from "@/app/src";

export default function InteractiveCard() {
  return (
    <Card className="relative w-[350px]">
      <a href="#" className="absolute inset-0 z-10" />
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>
          The entire card is clickable while buttons remain interactive.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Click anywhere on the card to follow the main link.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          className="relative z-20"
          onClick={(e) => {
            e.stopPropagation();
            alert('Cancel button clicked!');
          }}
        >
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
}