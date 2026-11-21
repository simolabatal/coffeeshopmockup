import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import TakeAway from './pages/TakeAway'
import Spots from './pages/Spots'
import Univers from './pages/Univers'
import ScrollProgress from './components/ScrollProgress'
import RouteTransition from './components/RouteTransition'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <RouteTransition />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/take-away" element={<TakeAway />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/univers" element={<Univers />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
