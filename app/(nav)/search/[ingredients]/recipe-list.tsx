"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { getRecipe } from "@/api/getRecipe";
import { fetchRecipeType, recipeItemType } from "@/types/recipe";
import Image from "next/image";
import IngredientsExpand from "./ingredients-expand";
import Recipe from "./recipe";
import Pagination from "../../../../components/pagination";

export default function RecipeList({ ingredients }: { ingredients: string }) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [listItem, setListItem] = useState<recipeItemType[] | null>(null);
  const [recipeItem, setRecipeItem] = useState<recipeItemType | null>(null);
  const [listItemTotal, setListItemTotal] = useState<number>(0);
  const [recipeIndex, setRecipeIndex] = useState<number>(0);

  const fetchRecipe = useCallback(async () => {
    setLoading(true);

    try {
      const res: fetchRecipeType = await getRecipe(
        ingredients,
        recipeIndex * 6 + 1,
        recipeIndex * 6 + 6
      );
      setListItem(res[0]);
      setListItemTotal(res[1]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [recipeIndex]);

  useEffect(() => {
    fetchRecipe();
  }, [recipeIndex]);

  return (
    <section className={clsx("bg-white", "lg:w-[1024px]", "w-full")}>
      <p className={clsx("px-10", "mt-5", "text-gray-700")}>
        <b>{listItemTotal}</b> 개의 레시피를 찾았어요
      </p>
      <ul
        className={clsx(
          "p-5",
          "w-full",
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {listItem && !loading
          ? listItem.map((item, index) => {
              return (
                <li
                  key={index}
                  className={clsx(
                    "py-5",
                    "md:mx-5",
                    "cursor-pointer",
                    "flex",
                    "flex-col",
                    "items-center"
                  )}
                >
                  <Image
                    src={item.ATT_FILE_NO_MAIN}
                    alt={item.RCP_NM}
                    width={300}
                    height={300}
                    className={clsx(
                      "rounded-2xl",
                      "shadow-xl",
                      "h-[260px]",
                      "object-cover"
                    )}
                    onClick={() => setRecipeItem(item)}
                  />
                  <div className={clsx("text-left", "w-[300px]")}>
                    <p
                      className={clsx(
                        "font-bold",
                        "text-gray-600",
                        "text-lg",
                        "mt-4"
                      )}
                      onClick={() => setRecipeItem(item)}
                    >
                      {item.RCP_NM}
                    </p>
                    <div className={clsx("text-xs", "text-gray-400")}>
                      <IngredientsExpand ingredient={item.RCP_PARTS_DTLS} />
                    </div>
                  </div>
                </li>
              );
            })
          : [0, 1, 2, 3, 4, 5].map((i) => (
              <li
                key={i}
                className={clsx("animate-pulse", "py-5", "md:mx-5", "m-auto")}
              >
                <div
                  className={clsx(
                    "h-[260px]",
                    "w-[260px]",
                    "rounded-2xl",
                    "bg-slate-200"
                  )}
                />
                <div className={clsx("h-5", "w-3/5", "mt-4", "bg-slate-200")} />
                <div className={clsx("h-8", "w-2/5", "mt-4", "bg-slate-200")} />
              </li>
            ))}
      </ul>
      <Recipe recipeItem={recipeItem} setRecipeItem={setRecipeItem} />

      {/* Pagination */}
      <Pagination
        index={recipeIndex}
        setIndex={setRecipeIndex}
        maxNum={listItemTotal}
      />
    </section>
  );
}
