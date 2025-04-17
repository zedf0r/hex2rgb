export const Data = ({ color }: { color: string }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: color === "Ошибка" ? "#fff" : color,
          height: "40px",
          width: "150px",
          textAlign: "center",
          color: color === "Ошибка" ? "#000" : "#fff",
        }}
      >
        <p>{color}</p>
      </div>
    </>
  );
};
