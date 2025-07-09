import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ReducerWithExample from './pages/ReducerWithExample'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={'/reducer-example'} element={<ReducerWithExample />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App