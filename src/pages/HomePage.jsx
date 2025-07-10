import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="flex flex-col">
                <Link to={'/state-without-reducer'}
                    className="btn btn-primary my-2">
                    Consolidate state without Reducer
                </Link>
                <Link to={'/state-reducer'}
                    className="btn btn-primary my-2">
                    Consolidate state with Reducer
                </Link>
            </div>
        </div>
    )
}

export default HomePage