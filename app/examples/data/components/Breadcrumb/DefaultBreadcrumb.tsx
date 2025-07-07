import { Breadcrumb, BreadcrumbItem } from '@/app/src/components/Breadcrumb'

export const DefaultBreadcrumb = () => {
  return (
    <div style={{ padding: 24 }}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
