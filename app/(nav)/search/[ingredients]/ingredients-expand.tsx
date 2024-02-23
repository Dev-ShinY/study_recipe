import clsx from "clsx";
import { useState } from "react";

export default function IngredientsExpand({
  ingredient,
}: {
  ingredient: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div
        className={clsx(
          "overflow-hidden",
          "duration-300",
          "ease-in-out",
          expanded ? "max-h-screen" : "max-h-20"
        )}
      >
        {ingredient
          .split(/[,:●]/)
          .filter((item) => item.trim() !== "")
          .slice(0, expanded ? undefined : 3)
          .map((item, index) => (
            <p
              key={index}
              className={
                ["주재료", "소스", "드레싱", "구운채소"].includes(item.trim())
                  ? "font-bold my-1"
                  : ""
              }
            >
              {item} <br />
            </p>
          ))}
      </div>
      <button onClick={handleClick} className={clsx("text-blue-500", "my-1")}>
        {expanded ? "접기" : "더 보기"}
      </button>
    </div>
  );
}
