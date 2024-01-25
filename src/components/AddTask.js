

export const AddTask = ({ tasks, setTasks, eachTask, setEachTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (eachTask.id) {
            const date = new Date()
            const editedTask = tasks.map((task) => (
                task.id === eachTask.id ? { id: eachTask.id, name: eachTask.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : task
            ))
            setTasks(editedTask)
            setEachTask({})
        }
        else {
            const date = new Date()
            //console.log(e.target.task.value);
            //console.log(date);
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value, //getting the value from input named task
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasks([...tasks, newTask])
            setEachTask({})
        }


    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEachTask({ ...eachTask, name: e.target.value })} type="text" name="task" value={eachTask.name || ""} autoComplete="off" placeholder="add task here" maxLength='50' />
                <button type="submit">{eachTask.id ? 'Update' : 'Add'}</button>
            </form>

        </section>
    )
}


