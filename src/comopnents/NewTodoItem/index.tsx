import { NewTodoItemProps } from "..";
import Button from "../Button";
import Message from "../Message";

const NewTodoItem = ({ value, errorMsg, onCancel, onChange, onCreate }: NewTodoItemProps) => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Add new to-do title..."
          onChange={onChange}
          className="flex-grow py-0 px-0 bg-transparent border-none focus:ring-0"
          value={value}
        />
        <Button style="transparent" onClick={onCancel}>Cancel</Button>
        <Button onClick={onCreate}>Create</Button>
      </div>
      <Message text={errorMsg} type='error'></Message>
    </div>
  );
};

export default NewTodoItem;
