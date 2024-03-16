"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { getRecipe } from "@/api/getRecipe";
import { fetchRecipeType, recipeItemType } from "@/types/Recipe";
import Image from "next/image";
import IngredientsExpand from "./ingredients-expand";
import Recipe from "./recipe";

export default function RecipeList({
  ingredients,
  start,
  end,
}: {
  ingredients: string;
  start: number;
  end: number;
}) {
  const [listItem, setListItem] = useState<recipeItemType[] | null>(null);
  const [recipeItem, setRecipeItem] = useState<recipeItemType | null>(null);
  const [listItemTotal, setListItemTotal] = useState<number>(0);
  const [recipeIndex, setRecipeIndex] = useState<number>(0);

  const fetchRecipe = useCallback(async () => {
    try {
      const res: fetchRecipeType = await getRecipe(
        ingredients,
        recipeIndex * 5,
        recipeIndex * 5 + 5
      );
      console.log(res);

      setListItem(res[0]);
      setListItemTotal(res[1]);
    } catch (error) {
      console.error(error);
    }
  }, [recipeIndex]);

  useEffect(() => {
    fetchRecipe();
  }, [recipeIndex]);

  return (
    <section className={clsx("bg-white", "w-full")}>
      <ul className={clsx("p-5", "w-full")}>
        {listItem &&
          listItem.map((item, index) => {
            return (
              <li
                key={item.RCP_NM}
                className={clsx(
                  "my-5",
                  "flex",
                  "border-b",
                  "border-gray-100",
                  "py-5",
                  "w-full",
                  "cursor-pointer"
                )}
              >
                <Image
                  src={item.ATT_FILE_NO_MAIN}
                  alt={item.RCP_NA_TIP}
                  width={130}
                  height={130}
                  className={clsx("rounded-lg", "mr-5", "max-h-[130px]")}
                  onClick={() => setRecipeItem(item)}
                />
                <div>
                  <p
                    className={clsx("flex", "justify-between")}
                    onClick={() => setRecipeItem(item)}
                  >
                    {item.RCP_NM}
                    <span
                      className={clsx(
                        "bg-main-custom-b",
                        "rounded-full",
                        "flex",
                        "items-center",
                        "justify-center",
                        "text-xs",
                        "block",
                        "p-1",
                        "ml-2",
                        "min-w-10",
                        "h-fit"
                      )}
                    >
                      {item.RCP_WAY2}
                    </span>
                  </p>
                  <div className={clsx("text-xs", "text-gray-500", "mt-4")}>
                    <IngredientsExpand ingredient={item.RCP_PARTS_DTLS} />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <Recipe recipeItem={recipeItem} setRecipeItem={setRecipeItem} />
    </section>
  );
}
