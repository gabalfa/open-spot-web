import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from '../context/Global'
import { Layout } from '../Layout'
import { Frequent } from '../components/Frequent'
import { Sports } from '../components/Sports'
import { Chill } from '../components/Chill'
import { News } from '../components/News'
import { NewSpot } from '../components/NewSpot'
import { NotFound } from '../components/NotFound'
import { GlobalStyle } from './styles'

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/open-spot-web/frequent" element={<Frequent />} />
            <Route path="/open-spot-web/sports" element={<Sports />} />
            <Route path="/open-spot-web/chill" element={<Chill />} />
            <Route path="/open-spot-web/news" element={<News />} />
            <Route path="/open-spot-web/new-spot" element={<NewSpot />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
