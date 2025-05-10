import { Breadcrumb, BreadcrumbItem } from "@/app/src/components/Breadcrumb";

const BreadcrumbExample = () => {
  return (
    <div style={{ padding: 24 }}>
      <Breadcrumb className="text-white" separatorClassName="text-white">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbExample;