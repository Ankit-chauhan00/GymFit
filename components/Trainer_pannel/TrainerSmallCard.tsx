import React from "react";
import { IconType } from "react-icons";

interface TrainerSmallCardProps {
  data: {
    icon: IconType;
    title: string;
    analytics: number;
    footer?: {
      title: string;
      cardType: string;
    };
  };
}

const TrainerSmallCard = ({ data: { icon: Icon, title, analytics, footer } }: TrainerSmallCardProps) => {
  return (
    <section className="flex h-[120px] w-[260px] gap-4 rounded-md border  p-5 shadow-sm bg-color transition-all hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-md ">
        <Icon size={54} className="text-red-600" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <p className="mt-1 text-xl font-bold ">2</p>

        {footer && (
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className="font-medium text-green-600">{footer.title}</span>

            <span className="text-gray-400">{footer.cardType}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainerSmallCard;
