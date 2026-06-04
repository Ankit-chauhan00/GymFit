"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { formUrlQuerry } from "@/constants/url";

interface Props {
  min?: number;
  max?: number;
  step?: number;
  containerClasses?: string;
}

const PriceFilter = ({
  min = 0,
  max = 50000,
  step = 10,
  containerClasses = "",
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // changed max -> min
  const currentPrice = Number(searchParams.get("price")) || min;

  const [value, setValue] = React.useState([currentPrice]);

  // added sync effect
  React.useEffect(() => {
    const price = searchParams.get("price");

    if (!price) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue([min]);
    } else {
      setValue([Number(price)]);
    }
  }, [searchParams, min]);

  const handlePriceChange = (newValue: number[]) => {
    setValue(newValue);

    const newUrl = formUrlQuerry({
      params: searchParams.toString(),
      key: "price",
      value: newValue[0].toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      className={cn(
        "background-light800_dark300 border-none rounded-2xl border p-1",
        containerClasses
      )}
    >
      <div className="flex items-center justify-between">

        <div className="primary-gradient rounded-lg px-5 py-2 text-sm font-bold text-white">
          ₹{value[0].toLocaleString()}
        </div>
      </div>

      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={handlePriceChange}
        className="cursor-pointer"
      />

      <div className="text-dark500_light700 flex justify-between text-xs">
        <span>₹{min}</span>
        <span>₹{max.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PriceFilter;