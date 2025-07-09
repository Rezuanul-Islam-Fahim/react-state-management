import GlobalBodyCard from '../components/GlobalBodyCard'

const Contents = () => {
    return (
        <>
            <h3 className="card-title text-1xl mb-4">This is header 1</h3>
            <h3 className="card-title text-1xl mb-4">This is header 2</h3>
        </>
    )
}

const ReducerWithExample = () => {
    return (
        <GlobalBodyCard
            title={'State Management with Reducer'}
            contents={<Contents />} />
    )
}

export default ReducerWithExample