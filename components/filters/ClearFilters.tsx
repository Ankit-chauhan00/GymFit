"use client";

import { RotateCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  otherClasses?: string;
  containerClasses?: string;
}

const ClearFilters = ({
  otherClasses = "",
  containerClasses = "",
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClearFilters = () => {

    router.push(pathname, {scroll: false})

  };

  return (
    <div className={cn("relative", containerClasses)}>
      <Button
        onClick={handleClearFilters}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl border",
          "light-border background-light800_dark300",
          "text-dark500_light700",
          "px-5 py-2.5 transition-all duration-200",
          "hover:bg-red-500 hover:text-white",
          "active:scale-[0.98]",
          otherClasses
        )}
      >
        <RotateCcw size={16} />
        <span className="body-regular">Clear Filters</span>
      </Button>
    </div>
  );
};

export default ClearFilters;