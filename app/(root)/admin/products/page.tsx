"use client";
import ProductForm from "@/components/forms/ProductForm";
import { CreateProduct } from "@/lib/actions/product.action";
import { productCreationSchema } from "@/lib/validation";

const ProductsPage = () => {
  return (
    <>
      <ProductForm
        schema={productCreationSchema}
        defaultValues={{
          title: "",
          description: "",
          price: 0.0,
          stock: 0,
          category: "SUPPLEMENTS",
          productType: "WHEY_PROTEIN",
        }}
        onSubmit={CreateProduct}
      />
    </>
  );
};

export default ProductsPage;
