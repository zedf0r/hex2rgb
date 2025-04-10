import React, { useState } from "react";
export const Form = () => {
  const [color, setColor] = useState("");

  const handeChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { value } = target as HTMLInputElement;

    if (value.length === 7) {
      const hex = value.slice(0, 1);
      if (hex === "#") {
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);

        setColor(`rgb(${r}, ${g}, ${b})`);

        if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
          setColor("Ошибка");
        }
      }
    }
  };
  return (
    <>
      <form>
        <input type="text" name="hex" onInput={handeChange} />
      </form>
      <div
        style={{
          backgroundColor: color,
          height: "40px",
          width: "150px",
          textAlign: "center",
          color: "white",
        }}
      >
        <p>{color}</p>
      </div>
    </>
  );
};
