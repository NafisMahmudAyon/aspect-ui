// In /docs/components/button/Code/Code.tsx

export const defaultButton = {
  'ButtonComponent.tsx': `import { Button } from "@/components/aspect-ui/button";

export default function DefaultButton() {
  return (
    <Button>Default Button</Button>
  );
}`,
  'ButtonComponent.jsx': `import { Button } from "@/components/aspect-ui/button";

export default function DefaultButton() {
  return (
    <Button>Default Button</Button>
  );
}`,
};

export const variantButtons = {
  'ButtonComponent.tsx': `import { Button } from "@/components/aspect-ui/button";

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`,
  'ButtonComponent.jsx': `import { Button } from "@/components/aspect-ui/button";

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`,
};

export const sizeButtons = {
  'ButtonComponent.tsx': `import { Button } from "@/components/aspect-ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
}`,
  'ButtonComponent.jsx': `import { Button } from "@/components/aspect-ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
}`,
};

export const iconButtons = {
  'ButtonComponent.tsx': `import { Button } from "@/components/aspect-ui/button";
import { PlusIcon, ArrowRightIcon } from "lucide-react";

export default function IconButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button icon={<PlusIcon className="h-4 w-4" />}>
        Add New
      </Button>
      <Button icon={<ArrowRightIcon className="h-4 w-4" />} iconPosition="right">
        Next
      </Button>
      <Button variant="outline" icon={<PlusIcon className="h-4 w-4" />} />
    </div>
  );
}`,
  'ButtonComponent.jsx': `import { Button } from "@/components/aspect-ui/button";
import { PlusIcon, ArrowRightIcon } from "lucide-react";

export default function IconButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button icon={<PlusIcon className="h-4 w-4" />}>
        Add New
      </Button>
      <Button icon={<ArrowRightIcon className="h-4 w-4" />} iconPosition="right">
        Next
      </Button>
      <Button variant="outline" icon={<PlusIcon className="h-4 w-4" />} />
    </div>
  );
}`,
};

export const loadingButtons = {
  'ButtonComponent.tsx': `import { Button } from "@/components/aspect-ui/button";

export default function LoadingButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button loading={true}>
        Send
      </Button>
      <Button loading={true}>
        Save Changes
      </Button>
    </div>
  );
}`,
  'ButtonComponent.jsx': `import { Button } from "@/components/aspect-ui/button";

export default function LoadingButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Loading</Button>
      <Button isLoading loadingText="Saving...">Save Changes</Button>
    </div>
  );
}`
};

export const disabledButtons = {
  'ButtonComponent.tsx': `import { Button } from "@/components/aspect-ui/button";

export default function DisabledButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled Outline</Button>
    </div>
  );
}`,
  'ButtonComponent.jsx': `import { Button } from "@/components/aspect-ui/button";

export default function DisabledButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled Outline</Button>
    </div>
  );
}`,
};

export const buttonPropsData = [
  {
    prop: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'link' | 'outline' | 'ghost' | 'icon'",
    default: 'primary',
    description: 'Controls the visual style of the button',
  },
  {
    prop: 'size',
    type: "'sm' | 'default' | 'lg' | 'icon'",
    default: 'default',
    description: 'Controls the size of the button',
  },
  {
    prop: 'isLoading',
    type: 'boolean',
    default: 'false',
    description: 'Shows a loading spinner',
  },
  {
    prop: 'loadingText',
    type: 'string',
    default: '',
    description: 'Text to display while loading',
  },
  {
    prop: 'asChild',
    type: 'boolean',
    default: 'false',
    description: 'Allows rendering as a different element (like a link)',
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the button',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content to be rendered inside the button',
  },
];
