import ClearFilters from "@/components/filters/ClearFilters";
import CommonFilters from "@/components/filters/CommonFilters";
import PriceFilter from "@/components/filters/PriceFilter";
import LoaclSearch from "@/components/search/LoaclSearch";
import ProductsideBar from "@/components/sidebars/ProductsideBar";

import { ProductCategoryFilters, ProductPageFilters, ProductTypeFilters } from "@/constants/filter";

const ProductSections = () => {
  return (
    <section className="min-h-screen w-full bg-white py-24 text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Products
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl dark:text-slate-400">
              Browse our premium fitness products and explore gear, recovery tools, and essentials built for athletes.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
            <LoaclSearch
              route="/products"
              imgSrc="/icons/search.svg"
              placeholder="Search products..."
              iconPosition="right"
              otherClasses="w-full border border-slate-200 bg-white/90 text-slate-900 outline-none shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white"
            />
            <CommonFilters filters={ProductPageFilters} otherClasses="w-full" placeholder="Sort by:" />
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-100/80 p-2 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/90">
            <div className="flex flex-wrap justify-between  items-center ">
              <div className="flex flex-col gap-2 items-center justify-center rounded-3xl h-20 w-50 bg-white/90 p-4 shadow-sm dark:bg-zinc-900/90">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Category
                </p>
                <CommonFilters
                  filters={ProductCategoryFilters}
                  otherClasses="w-full"
                  placeholder="Category"
                  filterKey="category"
                />
              </div>

              <div className="flex flex-col gap-2 rounded-3xl items-center justify-center bg-white/90 p-4 shadow-sm dark:bg-zinc-900/90">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Product Type
                </p>
                <CommonFilters
                  filters={ProductTypeFilters}
                  otherClasses="w-full"
                  placeholder="Product Type"
                  filterKey="product-type"
                />
              </div>

              <div className="flex flex-col gap-1  rounded-3xl items-center justify-center h-20  bg-white/90 p-6 shadow-sm dark:bg-zinc-900/90">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Price Range
                </p>
                <PriceFilter />
              </div>

              <div className="flex items-end justify-start rounded-3xl bg-white/90 p-4 shadow-sm dark:bg-zinc-900/90">
                <ClearFilters />
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/95">
            <ProductsideBar />
          </aside>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/95">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Product Listings</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your search results and filtered products will appear here. Adjust filters to refine the list.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/95 dark:text-white">
                <p className="text-lg font-semibold">Product Card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSections;
