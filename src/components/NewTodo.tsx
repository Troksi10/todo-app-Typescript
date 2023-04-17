import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text" className={classes.label}>
        Todo text
      </label>
      <input
        type="text"
        id="text"
        className={classes.input}
        ref={todoTextInputRef}
      />
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
