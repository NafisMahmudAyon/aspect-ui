import { Button } from "@/app/src";

export default function VariantButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* <Button variant="default">Default</Button> */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      {/* <Button variant="destructive">Destructive</Button> */}
    </div>
  );
}
