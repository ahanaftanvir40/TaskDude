
export const ShowTask = ({ tasks, setTasks }) => {


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
                        <i className="bi bi-pencil-square"></i>
                        <i className="bi bi-trash3"></i>
                    </li>
                ))}


            </ul>
        </section>
    )
}
