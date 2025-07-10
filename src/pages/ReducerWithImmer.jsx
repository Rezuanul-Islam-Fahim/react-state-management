import { useState } from 'react'
import { useImmerReducer } from 'use-immer'

const ReducerWithImmer = () => {
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks)

    const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            text: text,
            id: tasks.length
        })
    }

    const handleUpdateTask = (task) => {
        dispatch({
            type: 'updated',
            task: task
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            taskId: taskId
        })
    }

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Reducer with Immer
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

const taskReducer = (draft, action) => {
    switch (action.type) {
        case 'added': {
            draft.push({
                id: action.id,
                text: action.text,
                done: false
            })
            break;
        }

        case 'updated': {
            const index = draft.findIndex(e => e.id === action.task.id)
            draft[index] = action.task
            break
        }

        case 'deleted': {
            return draft.filter(e => e.id !== action.taskId)
        }

        default: {
            throw new Error('Invalid action: ' + action.type)
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
]

export default ReducerWithImmer