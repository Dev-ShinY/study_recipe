import clsx from "clsx";

export default function Home() {
  return (
    <main className={clsx("flex", "flex-col", "items-center", "p-5")}>
      {/* main des */}
      <div className={clsx("my-5", "w-full")}>
        <p className={clsx("mb-2", "text-2xl", "font-bold")}>냉파란?</p>
        <p className={clsx("mb-2", "text-xl", "font-semibold")}>
          <span className={clsx("font-bold", "text-main-custom-a")}>
            남아있는 재료
          </span>
          를 적극 활용하여 <br />
          음식을 준비하는 과정을 얘기해요
        </p>
      </div>
    </main>
  );
}
