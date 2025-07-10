import { useState } from 'react'

const StateWithoutReducer = () => {
    const [tasks, setTasks] = useState(initialTasks)

    const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                done: false,
                text
            }
        ])
    }

    const handleUpdateTask = (task) => {
        setTasks(tasks.map(v => {
            if (v.id === task.id) {
                return task;
            } else {
                return v
            }
        }))
    }

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(v => v.id !== taskId))
    }

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                State Management without Reducer
            </h2>
            <AddTask handleAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask} />
        </>
    )
}

const AddTask = ({ handleAddTask }) => {
    const [text, setText] = useState('')

    return (
        <div className="flex flex-row">
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add Task"
                className="input input-bordered input-md w-full max-w-xs" />
            <button
                className="btn btn-neutral btn-wide ml-4"
                onClick={() => {
                    setText('')
                    handleAddTask(text)
                }} >
                Add
            </button>
        </div>
    )
}

const TaskList = ({ tasks, handleUpdateTask, handleDeleteTask }) => {
    return (
        <div className="flex flex-col mt-4">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask} />
            ))}
        </div>
    )
}

const Task = ({ task, handleUpdateTask, handleDeleteTask }) => {
    const [editing, setEditing] = useState(false)

    return (
        <div className="flex flex-row my-1">
            <div className="flex flex-row bg-gray-100 rounded-md px-5 py-3 min-w-80">
                <input
                    type="checkbox"
                    onChange={e => handleUpdateTask({
                        ...task,
                        done: e.target.checked
                    })}
                    checked={task.done}
                    className="checkbox mr-3" />
                {editing ? (
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs input-xs"
                        value={task.text}
                        onChange={e => handleUpdateTask({
                            ...task,
                            text: e.target.value
                        })} />
                ) : (
                    <p className="text-md">{task.text}</p>
                )}
            </div>
            <button
                className="btn btn-accent ml-4"
                onClick={e => setEditing(!editing)} >
                {editing ? 'Save' : 'Edit'}
            </button>
            <button
                className="btn btn-error ml-4"
                onClick={e => handleDeleteTask(task.id)} >
                Delete
            </button>
        </div>
    )
}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
]

export default StateWithoutReducer