import React, { useState } from "react";
export const Form = () => {
  const [color, setColor] = useState("");

  const handeChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { value } = target as HTMLInputElement;

    if (value.length === 6) {
      const r = parseInt(value.slice(0, 2), 16);
      const g = parseInt(value.slice(2, 4), 16);
      const b = parseInt(value.slice(4, 6), 16);

      setColor(`rgb(${r}, ${g}, ${b})`);

      if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
        setColor("Ошибка");
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
