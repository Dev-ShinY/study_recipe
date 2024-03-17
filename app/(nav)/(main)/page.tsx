import clsx from "clsx";
import Chips from "@/components/chips";
import MainCover from "@/components/main-cover";

export default function Home() {
  return (
    <main className={clsx("flex", "flex-col", "items-center")}>
      <MainCover />
      <Chips />
    </main>
  );
}
