import ProductModel from "@/components/3d/product/ProductModel";
import ROUTES from "@/constants/routes";
import { GetProduct } from "@/lib/actions/product.action";
import { RouteParams } from "@/types/global";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ProductDisplay3D = async ({ params }: RouteParams) => {
  const { id } = await params;

  const { data: product } = await GetProduct({ productId: id });

  if (!product?.modelUrl) {
    toast.error("Unable to get 3d Product  Model");
    redirect(ROUTES.PRODUCT(id));
  }

  const { modelUrl, title, description, price, stock } = product!;

  return (
    <main className="mt-10 w-full overflow-x-hidden bg-black text-white">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Canvas */}
        <div className="fixed inset-0 z-10">
          <ProductModel modelUrl={modelUrl!} />
        </div>

        {/* Overlay Content */}
        <div className="relative z-20 flex h-full flex-col justify-between p-8 md:p-16">
          {/* Top */}
          <div className="flex flex-col gap-2">
            <h1 className="font-iceland text-6xl font-bold">{title}</h1>
            <h3 className="font-asap text-xl font-extralight">{description}</h3>
            <div className="mt-2 flex w-1/2 flex-col">
              <p className="text-2xl">Stock:- {stock}</p>
              <p className="font-iceland text-5xl">₹{Number(price)}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDisplay3D;
