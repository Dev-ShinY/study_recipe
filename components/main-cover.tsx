import clsx from "clsx";

export default function MainCover() {
  return (
    <div
      className={clsx(
        "w-full",
        "flex",
        "justify-center",
        "bg-gray-50",
        "mb-10"
      )}
    >
      <div className={clsx("lg:w-[1024px]", "w-full", "p-10", "text-center")}>
        <p
          className={clsx(
            "mb-2",
            "text-2xl",
            "font-bold",
            "text-main-custom-b",
            "tracking-wider"
          )}
        >
          냉장고를 파먹자
        </p>
      </div>
    </div>
  );
}
