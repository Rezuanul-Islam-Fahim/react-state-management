import { useReducer, useState, createContext, useContext } from 'react'

const ReducerAndContext = () => {
    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Reducer and Context
            </h2>
            <TasksProvider>
                <AddTask />
                <TaskList />
            </TasksProvider>
        </>
    )
}

const TasksContext = createContext(null)
const TaskDispatchContext = createContext(null)

const useTasks = () => useContext(TasksContext)
const useTaskDispatch = () => useContext(TaskDispatchContext)

const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    return (
        <TasksContext value={tasks}>
            <TaskDispatchContext value={dispatch}>
                {children}
            </TaskDispatchContext>
        </TasksContext>
    )
}

const AddTask = ({ }) => {
    const [text, setText] = useState('')
    const dispatch = useTaskDispatch()

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
                    dispatch({
                        type: 'added',
                        text: text
                    })
                }} >
                Add
            </button>
        </div>
    )
}

const TaskList = ({ }) => {
    const tasks = useTasks()

    return (
        <div className="flex flex-col mt-4">
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}

const Task = ({ task }) => {
    const [editing, setEditing] = useState(false)
    const dispatch = useTaskDispatch()

    return (
        <div className="flex flex-row my-1">
            <div className="flex flex-row bg-gray-100 rounded-md px-5 py-3 min-w-80">
                <input
                    type="checkbox"
                    onChange={e => dispatch({
                        type: 'updated',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    })}
                    checked={task.done}
                    className="checkbox mr-3" />
                {editing ? (
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs input-xs"
                        value={task.text}
                        onChange={e => dispatch({
                            type: 'updated',
                            task: {
                                ...task,
                                text: e.target.value
                            }
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
                onClick={e => dispatch({
                    type: 'deleted',
                    id: task.id
                })} >
                Delete
            </button>
        </div>
    )
}

const taskReducer = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: tasks.length,
                    text: action.text,
                    done: false
                }
            ]
        }

        case 'updated': {
            return tasks.map(e => {
                if (e.id === action.task.id) {
                    return action.task
                } else {
                    return e
                }
            })
        }

        case 'deleted': {
            return tasks.filter(e => e.id !== action.id)
        }

        default: {
            throw new Error('Unknown action: ' + action.type)
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
]

export default ReducerAndContext
