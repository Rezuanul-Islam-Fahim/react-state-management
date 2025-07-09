import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="flex flex-col">
                <Link to={'/reducer-example'}
                    className="btn btn-primary">
                    Reducer with Example
                </Link>
            </div>
        </div>
    )
}

export default HomePage