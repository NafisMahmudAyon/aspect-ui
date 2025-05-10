import { Breadcrumb, BreadcrumbItem } from "@/app/src/components/Breadcrumb";
import { ChevronRight } from "lucide-react";

const CustomSeparator = () => {
  return (
    <div style={{ padding: 24 }} >
      <Breadcrumb separator={<ChevronRight />}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default CustomSeparator;