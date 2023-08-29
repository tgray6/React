import "../styles.css";
import { useRef } from "react";

interface ITodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

function InputField(props: ITodoProps) {
  const { todo, setTodo, handleAdd } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        //blurs make it NOT focus the input field whenever we submit with enter key...does not seem to affect clicking the Go button
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Add Something"
        className="input__box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
}
export default InputField;
