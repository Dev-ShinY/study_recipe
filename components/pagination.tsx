import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export default function Pagination({
  index,
  setIndex,
  maxNum,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  maxNum: number;
}) {
  const PAGE_RANGE = 2;

  return (
    <div className={clsx("flex", "justify-center", "mb-10")}>
      {Array.from(
        { length: PAGE_RANGE * 2 + 1 },
        (_, i) => index - PAGE_RANGE + i
      ).map((item) => {
        if (item >= 0 && item < maxNum / 5) {
          return (
            <button
              className={clsx(
                "bg-white",
                "border",
                item === index ? "border-main-custom-b" : "border-gray-200",
                "rounded-md",
                "w-10",
                "h-10",
                "flex",
                "justify-center",
                "items-center",
                "md:mx-5",
                "mx-1",
                "cursor-pointer"
              )}
              onClick={() => setIndex(item)}
              key={item}
            >
              {item + 1}
            </button>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
