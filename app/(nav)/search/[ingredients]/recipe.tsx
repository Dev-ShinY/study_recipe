import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { recipeItemType } from "@/types/recipe";
import Image from "next/image";

export default function Recipe({
  recipeItem,
  setRecipeItem,
}: {
  recipeItem: recipeItemType | null;
  setRecipeItem: Dispatch<SetStateAction<recipeItemType | null>>;
}) {
  const [manual, setManual] = useState<string[]>([]);
  const [manualImg, setManualImg] = useState<string[]>([]);

  useEffect(() => {
    if (recipeItem !== null) {
      const newManual: string[] = [];
      const newManualImg: string[] = [];

      Object.entries(recipeItem).forEach(([key, value]) => {
        if (
          key.startsWith("MANUAL") &&
          !key.startsWith("MANUAL_IMG") &&
          value !== ""
        ) {
          newManual.push(value);
        } else if (key.startsWith("MANUAL_IMG") && value !== "") {
          newManualImg.push(value);
        }
      });
      setManual(newManual.sort());
      setManualImg(newManualImg.sort());
    }
  }, [recipeItem]);

  return (
    recipeItem && (
      <aside
        className={clsx(
          "fixed",
          "shadow-xl",
          "md:w-[400px]",
          "bg-gray-50",
          "w-full",
          "h-full",
          "z-10",
          "top-16",
          "right-0",
          "overflow-scroll",
          "pb-[10rem]",
          recipeItem !== null ? "translate-x-0" : "translate-x-full"
        )}
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className={clsx(
            "flex",
            "justify-between",
            "mb-5",
            "p-5",
            "sticky",
            "top-0",
            "z-10",
            "bg-white",
            "w-full",
            "border-b",
            "border-gray-300"
          )}
        >
          <span className={clsx("text-lg", "font-semibold")}>
            {recipeItem?.RCP_NM}
          </span>
          <span
            onClick={() => setRecipeItem(null)}
            className={clsx("cursor-pointer")}
          >
            ×
          </span>
        </div>
        <Image
          src={recipeItem?.ATT_FILE_NO_MAIN}
          alt={recipeItem?.RCP_NA_TIP}
          width={400}
          height={400}
          className={clsx("border-y", "border-gray-100")}
          priority={true}
        />
        <div className={"mt-5"}>
          {manual.map((item, index) => (
            <div key={index} className={clsx("bg-white", "mb-5", "py-5")}>
              <div className={clsx("px-5", "mb-5")}>
                <p className={clsx("text-xl", "font-bold")}>
                  Step {index + 1} / {manual.length}
                </p>
                <p>{item}</p>
              </div>
              <Image
                src={manualImg[index]}
                alt={"image"}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </aside>
    )
  );
}
