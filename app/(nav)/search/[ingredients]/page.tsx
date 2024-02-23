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
    <main className={clsx("bg-gray-50")}>
      <div className={clsx("p-5", "my-5", "w-full")}>
        <p className={clsx("mb-2", "text-2xl", "font-bold")}>냉파란?</p>
        <p className={clsx("mb-2", "text-xl", "font-semibold")}>
          <span className={clsx("font-bold", "text-main-custom-a")}>
            남아있는 재료
          </span>
          를 적극 활용하여 <br />
          음식을 준비하는 과정을 얘기해요
        </p>
      </div>
      <ul className={clsx("p-5", "flex", "items-start", "w-full", "flex-wrap")}>
        {decodeURIComponent(ingredients)
          .split(",")
          .map((value, index) => (
            <li
              className={clsx(
                "mr-4",
                "mb-2",
                "bg-main-custom-c",
                "rounded-full",
                "px-4",
                "py-2"
              )}
              key={index}
            >
              {value}
            </li>
          ))}
      </ul>

      <RecipeList ingredients={ingredients} start={0} end={5} />
    </main>
  );
}
