import { useState } from "react";
import { Form } from "./Form";
import { Data } from "./Data";

export const App = () => {
  const [color, setColor] = useState("");

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { value } = target as HTMLInputElement;

    if (value.length === 7) {
      const hex = value.slice(0, 1);
      if (hex === "#") {
        const rStr = value.slice(1, 3);
        const gStr = value.slice(3, 5);
        const bStr = value.slice(5, 7);

        const hexRegex = /^[0-9a-fA-F]{2}/;

        if (hexRegex.test(rStr) && hexRegex.test(gStr) && hexRegex.test(bStr)) {
          const r = parseInt(rStr, 16);
          const g = parseInt(gStr, 16);
          const b = parseInt(bStr, 16);

          setColor(`rgb(${r}, ${g}, ${b})`);
          console.log(color);
        } else {
          setColor("Ошибка");
        }
      }
    }
  };
  return (
    <>
      <Form handleChange={handleChange} />

      <Data color={color} />
    </>
  );
};
