import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ReducerWithExample from './pages/ReducerWithExample'
import MainContentLayout from './layouts/MainContentLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<MainContentLayout />} >
          <Route path={'/reducer-example'} element={<ReducerWithExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App