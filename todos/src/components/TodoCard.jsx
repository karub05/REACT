/* eslint-disable react/prop-types */
export default function TodoCard(props) {
  const { children, index, handleDeleteTodo, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <i
            onClick={() => handleEditTodo(index)}
            className="fa-solid fa-pen-to-square"
          ></i>
        </button>
        <button>
          <i
            onClick={() => handleDeleteTodo(index)}
            className="fa-regular fa-trash-can"
          ></i>
        </button>
      </div>
    </li>
  );
}
