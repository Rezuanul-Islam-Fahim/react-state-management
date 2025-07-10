import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import StateWithReducer from './pages/StateWithReducer'
import MainContentLayout from './layouts/MainContentLayout'
import StateWithoutReducer from './pages/StateWithoutReducer'
import ReducerWithImmer from './pages/ReducerWithImmer'
import PassingDataWithContext from './pages/PassingDataWithContext'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<MainContentLayout />} >
          <Route path={'/state-without-reducer'} element={<StateWithoutReducer />} />
          <Route path={'/state-reducer'} element={<StateWithReducer />} />
          <Route path={'/reducer-immer'} element={<ReducerWithImmer />} />
          <Route path={'/pass-with-context'} element={<PassingDataWithContext />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App