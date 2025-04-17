type TypeFormProps = {
  handleChange(evt: React.FormEvent<HTMLInputElement>): void;
};

export const Form: React.FC<TypeFormProps> = ({ handleChange }) => {
  return (
    <>
      <form>
        <input type="text" name="hex" onInput={handleChange} />
      </form>
    </>
  );
};
