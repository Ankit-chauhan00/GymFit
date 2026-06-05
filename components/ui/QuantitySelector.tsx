"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuantitySelectorProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function QuantitySelector({
  value = 1,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = React.useState(value);

  const updateQuantity = (newValue: number) => {
    if (newValue < min || newValue > max) return;

    setQuantity(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(quantity - 1)}
        disabled={quantity <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Input
        type="number"
        value={quantity}
        onChange={(e) => updateQuantity(Number(e.target.value))}
        className="w-16 text-center"
        min={min}
        max={max}
      />

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(quantity + 1)}
        disabled={quantity >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}