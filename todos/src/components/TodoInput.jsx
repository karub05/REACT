/* eslint-disable react/prop-types */
export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
  return (
    <header>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
