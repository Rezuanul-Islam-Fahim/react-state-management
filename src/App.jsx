import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import StateWithReducer from './pages/StateWithReducer'
import MainContentLayout from './layouts/MainContentLayout'
import StateWithoutReducer from './pages/StateWithoutReducer'
import ReducerWithImmer from './pages/ReducerWithImmer'
import PassingDataWithContext from './pages/PassingDataWithContext'
import MoreOnContext from './pages/MoreOnContext'
import ReducerAndContext from './pages/ReducerAndContext'

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
          <Route path={'/more-context'} element={<MoreOnContext />} />
          <Route path={'/reducer-context'} element={<ReducerAndContext />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App