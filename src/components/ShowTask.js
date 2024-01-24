
export const ShowTask = ({ tasks, setTasks, eachTask, setEachTask }) => {
    const handleDelete = (taskId) => {
        const updatedTodo = tasks.filter((t_id) => taskId !== t_id.id)
        setTasks(updatedTodo)
    }
    const handleEdit = (taskId) => {
        const editedTodo = tasks.find((t_id) => {
            return taskId === t_id.id
        })
        setEachTask(editedTodo)

    }

    return (
        <section className="showTask">
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{tasks.length}</span>
                </span>
                <span className="clearAll" onClick={() => setTasks([])}>Clear All</span>
            </p>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time"> {task.time}</span>
                        </p>
                        <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash3"></i>
                    </li>
                ))}


            </ul>
        </section>
    )
}
