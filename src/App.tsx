import Modal from "./comopnents/Modal";
import "./App.css";
import Button from "./comopnents/Button";
import NewTodoItem from "./comopnents/NewTodoItem";
import NoTodoCard from "./comopnents/NoTodoCard";
import TodoItem from "./comopnents/TodoItem";
import { useCallback, useState } from "react";
import { Todo } from "./Interface";

function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);
  const handleCancel = () => {
    setIsCreating(false);
    setErrorMsg(undefined);
    setTodo("");
  };
  const createTodoItem = () => {
    if (todo.trim() === "") {
      setErrorMsg("To-do item cannot be empty!");
      return;
    } else if (todo.trim().length > 100) {
      setErrorMsg("Title must be shorter than or equal to 100 characters.");
      return;
    }
    setTodoList([...todoList, { text: todo, done: false }]);
    setIsCreating(false);
    setTodo("");
    setErrorMsg(undefined);
  };
  const handleToggleDone = (index: number) => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = [...prevTodoList];
      const toggledItem = {
        ...updatedTodoList[index],
        done: !updatedTodoList[index].done,
      };
      updatedTodoList.splice(index, 1);

      if (toggledItem.done) {
        updatedTodoList.push(toggledItem);
      } else {
        updatedTodoList.unshift(toggledItem);
      }

      return updatedTodoList;
    });
  };

  const handleRemoveTodo = (index: number) => {
    setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));
  };
  const handleClear = () => {
    setTodoList([]);
  };

  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <h1 className="text-2xl leading-7 font-bold text-stone-800">
          Things you should be doing today...
        </h1>
        <div className="flex">
          <Button
            onClick={() => setIsCreating(true)}
            className={isCreating ? "hidden" : ""}
          >
            Add New
          </Button>
          <Modal
            openModalButton={
              <Button color="rose" style="transparent">
                Clear
              </Button>
            }
            onConfirm={handleClear}
          >
            Confirm to clear all todos?
          </Modal>
        </div>
      </header>

      <section className={`py-6 ${!isCreating && "hidden"}`}>
        <NewTodoItem
          value={todo}
          onChange={handleChange}
          onCancel={handleCancel}
          onCreate={createTodoItem}
          errorMsg={errorMsg}
        ></NewTodoItem>
      </section>

      <section className="py-6">
        {todoList.length > 0 ? (
          todoList.map((todo, index) => (
            <div key={index}>
              <TodoItem
                key={index}
                done={todo.done}
                onDone={() => handleToggleDone(index)}
                onRemove={() => handleRemoveTodo(index)}
              >
                {todo.text}
              </TodoItem>
              <br />
            </div>
          ))
        ) : (
          <NoTodoCard />
        )}
      </section>
    </>
  );
}

export default App;
