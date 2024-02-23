"use client";

import { useState } from "react";
import clsx from "clsx";
import CustomInput from "@/components/custom-input";
import Link from "next/link";

export default function Chips() {
  const [values, setValues] = useState<string[]>([]);
  const handleChange = (newValues: string[]) => {
    setValues(newValues);
  };
  const handleDelete = (index: number) => {
    const newArray = values.filter((_, idx) => index !== idx);
    setValues(newArray);
  };

  const SearchButton: React.FC<{ active: boolean }> = ({ active }) => (
    <button
      className={clsx(
        "w-full",
        "h-10",
        "text-white",
        "flex",
        "justify-center",
        "items-center",
        "mt-10",
        "rounded-md",
        active ? "bg-black" : "bg-gray-200"
      )}
      disabled={!active}
    >
      검색
    </button>
  );

  return (
    <>
      <CustomInput
        placeholder={"냉장고 속 재료를 입력해주세요"}
        type={"b"}
        values={values}
        onChange={handleChange}
      />

      <ul className={clsx("flex", "items-start", "w-full", "flex-wrap")}>
        {values.map((value, index) => (
          <li
            className={clsx(
              "mr-4",
              "mb-2",
              "border-2",
              "border-main-custom-c",
              "rounded-full",
              "px-3",
              "py-1"
            )}
            key={index}
          >
            {value}
            <span className={clsx("ml-2")} onClick={() => handleDelete(index)}>
              ×
            </span>
          </li>
        ))}
      </ul>

      {values.length > 0 ? (
        <Link href={`/search/${values.join(",")}`} className={clsx("w-full")}>
          <SearchButton active={true} />
        </Link>
      ) : (
        <SearchButton active={false} />
      )}
    </>
  );
}
