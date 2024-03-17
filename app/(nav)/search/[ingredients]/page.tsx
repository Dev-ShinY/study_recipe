import MainCover from "@/components/main-cover";
import clsx from "clsx";
import RecipeList from "./recipe-list";

export default function Ingredients({
  params,
}: {
  params: {
    ingredients: string;
  };
}) {
  const { ingredients } = params;

  return (
    <main className={clsx("flex", "flex-col", "items-center")}>
      <MainCover />
      <ul
        className={clsx(
          "flex",
          "items-start",
          "lg:w-[1024px]",
          "w-full",
          "flex-wrap",
          "px-10"
        )}
      >
        {decodeURIComponent(ingredients)
          .split(",")
          .map((value, index) => (
            <li
              className={clsx(
                "mr-4",
                "mb-2",
                "border",
                "border-main-custom-c",
                "rounded-full",
                "px-4",
                "py-2",
                "shadow-lg"
              )}
              key={index}
            >
              {value}
            </li>
          ))}
      </ul>

      <RecipeList ingredients={ingredients} />
    </main>
  );
}
