
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";

import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  Star,
} from "lucide-react";

import { FiShoppingCart } from "react-icons/fi";
import { TbHexagon3D } from "react-icons/tb";

import Image from "next/image";
import { demoProducts } from "@/constants/dummydata";

interface ProductDetailsParams {
  params: { id: string };
}

const ProductDetails = async ({ params }: ProductDetailsParams) => {
  const { id } = await params;

  // dynamic product
  const product = demoProducts.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
      </section>
    );
  }

  return (
    <section className="w-full pt-20 px-4 py-10 md:px-8 lg:px-16">
      {/* breadcrumb */}
      <div className="mb-8  text-sm text-zinc-500">
        Home / {product.category} / <span className="text-white">{product.title}</span> 
      </div>

      {/* main section */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* LEFT IMAGES */}
        <div className="flex flex-col gap-4">
          {/* Main image */}
          <div className="overflow-hidden border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={product.images[0]?.imageUrl}
              alt={product.title}
              width={700}
              height={700}
              className="h-[350px] w-full object-cover md:h-[500px] rounded-1.5"
            />
          </div>

          {/* image gallery */}
          <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
            {product.images.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <Image
                  src={image.imageUrl}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="h-24 w-full object-cover rounded-1.5"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col">
          {/* title */}
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-widest text-red-500">
              {product.category}
            </p>

            <h1 className="font-iceland text-5xl leading-none md:text-6xl">
              {product.title}
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {product.description}
            </p>
          </div>

          {/* reviews */}
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <p className="text-sm text-zinc-500">(124 Reviews)</p>
          </div>

          {/* price */}
          <div className="mt-6 flex items-center gap-4">
            <h2 className="text-2xl  text-red-500">
              ₹{product.price}
            </h2>

            <span className="border rounded-1.5 border-green-500 px-3 py-1 text-sm text-green-500">
              In Stock ({product.stock})
            </span>
          </div>

          {/* features */}
          <div className="mt-8 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Features</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex rounded-1.5 items-center gap-3 border border-zinc-200 p-4 dark:border-zinc-800">
                <BadgeCheck className="text-red-500" />
                <p>Premium Quality Product</p>
              </div>

              <div className="flex rounded-1.5  items-center gap-3 border border-zinc-200 p-4 dark:border-zinc-800">
                <ShieldCheck className="text-red-500" />
                <p>Authentic Verified Brand</p>
              </div>

              <div className="flex rounded-1.5  items-center gap-3 border border-zinc-200 p-4 dark:border-zinc-800">
                <Truck className="text-red-500" />
                <p>Fast Delivery Available</p>
              </div>

              <div className="flex rounded-1.5  items-center gap-3 border border-zinc-200 p-4 dark:border-zinc-800">
                <BadgeCheck className="text-red-500" />
                <p>Best Seller Product</p>
              </div>
            </div>
          </div>

          {/* quantity */}
          <div className="mt-10">
            <QuantitySelector />
          </div>

          {/* actions */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button className="h-12 flex-1 rounded-md bg-red-600 text-white hover:bg-red-700">
              <div className="flex items-center gap-2">
                <FiShoppingCart size={20} />
                <span className="font-semibold">
                  Add To Cart
                </span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-12 flex-1 rounded-md border-zinc-300 dark:border-zinc-700"
            >
              Buy Now
            </Button>
          </div>

          {/* extra */}
          <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <p>
                Category :
                <span className="ml-2 font-medium text-black dark:text-white">
                  {product.category}
                </span>
              </p>

              <p>
                Product Type :
                <span className="ml-2 font-medium text-black dark:text-white">
                  {product.productType}
                </span>
              </p>

              <Button className=""><TbHexagon3D size={22} /> 3D View</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

