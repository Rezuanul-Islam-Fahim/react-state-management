import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-grey-100">
            <div className="flex flex-col">
                <Link to={'/reducer-example'}
                    className="px-6 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition">
                    Reducer with Example
                </Link>
            </div>
        </div>
    )
}

export default HomePage