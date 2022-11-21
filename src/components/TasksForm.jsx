import { useCreateTaskMutation } from "../api/apiSlice";

function TasksForm() {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    createTask({
      name,
      description,
      completed,
    });

    console.log(name, description, completed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" />
      <br />
      <label htmlFor="descripcion">Description: </label>
      <input type="text" name="description" />
      <br />
      <input type="checkbox" name="completed" />
      <label htmlFor="Completed">Completed</label>
      <br />
      <br />
      <button>Add Task</button>
    </form>
  );
}

export default TasksForm;
