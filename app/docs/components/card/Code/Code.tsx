export const defaultCard = {
  'CardComponent.tsx': `import { Card, CardContent } from "@/components/aspect-ui/card";

export default function DefaultCard() {
  return (
    <Card className="max-w-md">
      <CardContent className="p-6">
        <p>This is a basic card with some content. Cards can be used to group related information and actions.</p>
      </CardContent>
    </Card>
  );
}`,
  'CardComponent.jsx': `import { Card, CardContent } from "@/components/aspect-ui/card";

export default function DefaultCard() {
  return (
    <Card className="max-w-md">
      <CardContent className="p-6">
        <p>This is a basic card with some content. Cards can be used to group related information and actions.</p>
      </CardContent>
    </Card>
  );
}`
}

export const simpleCard = {
  'CardComponent.tsx': `import { Card, CardContent, CardTitle, CardDescription } from "@/components/aspect-ui/card";

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
}`,
  'CardComponent.jsx': `import { Card, CardContent, CardTitle, CardDescription } from "@/components/aspect-ui/card";

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
}`
}

export const withHeaderFooterCard = {
  'CardComponent.tsx': `import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from "@/components/aspect-ui/card";
import { Button } from "@/components/aspect-ui/button";

export default function CardWithHeaderFooter() {
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
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}`,
  'CardComponent.jsx': `import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from "@/components/aspect-ui/card";
import { Button } from "@/components/aspect-ui/button";

export default function CardWithHeaderFooter() {
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
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}`
}

export const interactiveCard = {
  'CardComponent.tsx': `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/aspect-ui/card";
import { Button } from "@/components/aspect-ui/button";

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
        <Button 
          className="relative z-20"
          onClick={(e) => {
            e.stopPropagation();
            alert('Deploy button clicked!');
          }}
        >
          Deploy
        </Button>
      </CardFooter>
    </Card>
  );
}`,
  'CardComponent.jsx': `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/aspect-ui/card";
import { Button } from "@/components/aspect-ui/button";

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
        <Button 
          className="relative z-20"
          onClick={(e) => {
            e.stopPropagation();
            alert('Deploy button clicked!');
          }}
        >
          Deploy
        </Button>
      </CardFooter>
    </Card>
  );
}`
}

export const cardPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the card'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the card'
  }
]

export const cardHeaderPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the card header'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the card header'
  }
]

export const cardTitlePropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the card title'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the card title'
  }
]

export const cardDescriptionPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the card description'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the card description'
  }
]

export const cardContentPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the card content'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the card content area'
  }
]

export const cardFooterPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the card footer'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the card footer'
  }
]
