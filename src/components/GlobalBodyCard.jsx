import { Link } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'

const GlobalBodyCard = ({ title, contents }) => {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-2xl">
                    <Link to="/" className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        Back to Homepage
                    </Link>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">
                                {title}
                            </h2>
                            {contents}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalBodyCard