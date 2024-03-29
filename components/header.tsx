import clsx from "clsx";

export default function Header() {
  return (
    <header
      className={clsx(
        "border-b",
        "border-gray-300",
        "p-4",
        "h-16",
        "w-full",
        "sticky",
        "top-0",
        "flex",
        "justify-center",
        "items-center",
        "font-bold",
        "text-gray-800",
        "bg-white",
        "z-10"
      )}
    >
      냉파 : 냉장고 파먹기
    </header>
  );
}
