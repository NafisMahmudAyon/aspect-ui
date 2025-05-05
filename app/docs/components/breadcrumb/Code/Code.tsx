


import { ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem } from "@/app/src/components/Breadcrumb";


export const customIconBreadcrumb = {
  'BreadcrumbComponent.tsx': `import { Breadcrumb, BreadcrumbItem } from '@/components/aspect-ui/Breadcrumb'
import { ChevronRight } from "lucide-react";

export const CustomIconBreadcrumb = () => {
  return (
    <Breadcrumb separator={<ChevronRight className="h-4 w-4" />}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
    </Breadcrumb>
  )
}
`,
  'BreadcrumbComponent.jsx': `import { Breadcrumb, BreadcrumbItem } from '@/components/aspect-ui/Breadcrumb'
import { ChevronRight } from "lucide-react";

export const CustomIconBreadcrumb = () => {
  return (
    <Breadcrumb separator={<ChevronRight className="h-4 w-4" />}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
    </Breadcrumb>
  )
}
`
};

export const CustomIconBreadcrumb = () => {
  return (
    <Breadcrumb separator={<ChevronRight className="h-4 w-4" />}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
    </Breadcrumb>
  )
};

export const defaultBreadcrumb = {
  'BreadcrumbComponent.tsx': `import { Breadcrumb, BreadcrumbItem } from '@/components/aspect-ui/Breadcrumb'

export const DefaultBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
    </Breadcrumb>
  )
}
`,
  'BreadcrumbComponent.jsx': `import { Breadcrumb, BreadcrumbItem } from '@/components/aspect-ui/Breadcrumb'

export const DefaultBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
    </Breadcrumb>
  )
}
`
};

export const DefaultBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Category</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
    </Breadcrumb>
  );
};

export const BreadcrumbPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Breadcrumb items to display as children.'
  },
  {
    prop: 'separator',
    type: 'ReactNode',
    default: "'/'",
    description: 'Custom separator between breadcrumb items.'
  },
  {
    prop: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes for the breadcrumb container.'
  }
];

export const BreadcrumbItemPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content of the breadcrumb item.'
  },
  {
    prop: 'href',
    type: 'string',
    default: "''",
    description: 'Optional link for the breadcrumb item.'
  },
  {
    prop: 'active',
    type: 'boolean',
    default: 'false',
    description: 'Marks the breadcrumb item as the current page.'
  },
  {
    prop: 'className',
    type: 'string',
    default: "''",
    description: 'Additional CSS classes for the breadcrumb item.'
  }
];
