import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>Loading ...</div>;
  else if (isError) return <div>Error : {error}</div>;

  return (
    <>  
      <table border='1px'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Completed</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th>{task.name}</th>
              <th>{task.description}</th>
              <th>
                {" "}
                <input
                  type="checkbox"
                  id={task.id}
                  checked={task.completed}
                  onChange={(e) => {
                    updateTask({
                      ...task,
                      completed: e.target.checked,
                    });
                  }}
                />
              </th>
              <th>
              <button onClick={() => deleteTask(task.id)}>delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TasksList;
