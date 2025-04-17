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
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);

        setColor(`rgb(${r}, ${g}, ${b})`);
        console.log(b);

        if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
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
