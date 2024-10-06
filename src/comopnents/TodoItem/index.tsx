import { TodoItemProps } from "..";
import {
  activeTodoIcon,
  inactiveTodoIcon,
  removeIcon,
} from "../../assets/icons";

const TodoItem = ({
  key,
  children,
  done = false,
  onDone,
  onRemove,
}: TodoItemProps) => {
  return (
    <div
      className={
        (done ? "opacity-50" : "opacity-100") +
        " bg-white rounded-lg shadow shadow-sm text-sm leading-5 font-medium text-stone-700 h-12 flex justify-between items-center gap-4 px-4"
      }
      key={key}
    >
      <div className="flex gap-4">
        <button onClick={onDone}>
          {done ? activeTodoIcon : inactiveTodoIcon}
        </button>
        <p>{children}</p>
      </div>
      <button onClick={onRemove}>{removeIcon}</button>
    </div>
  );
};

export default TodoItem;
