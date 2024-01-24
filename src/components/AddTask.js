

export const AddTask = ({ tasks, setTasks }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const date = new Date()
        //console.log(e.target.task.value);
        //console.log(date);
        const newTask = {
            id: date.getTime(),
            name: e.target.task.value, //getting the value from input named task
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasks([...tasks, newTask])
        e.target.task.value = ''
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" autoComplete="off" placeholder="add task here" maxLength='50' />
                <button type="submit">Add</button>
            </form>

        </section>
    )
}
