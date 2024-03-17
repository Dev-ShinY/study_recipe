import { useState } from "react";
import clsx from "clsx";

type parmsType = {
  placeholder: string | null;
  type: string;
  values: string[];
  onChange: (values: string[]) => void;
};

export default function CustomInput({
  placeholder,
  type,
  values,
  onChange,
}: parmsType) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddValue = () => {
    if (inputValue.trim() !== "") {
      const newValues = [...values, inputValue];
      onChange(newValues);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddValue();
    }
  };

  return (
    <div
      className={clsx(
        "border-2",
        "rounded-full",
        "lg:w-[1024px]",
        "w-full",
        "px-4",
        "py-3",
        `border-main-custom-${type}`,
        "flex",
        "justify-between",
        "mb-5"
      )}
    >
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder || undefined}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={clsx("w-full")}
      />
      <button onClick={handleAddValue}>＋</button>
    </div>
  );
}
