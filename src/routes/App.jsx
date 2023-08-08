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
            <Route
              exact
              path="/open-spot-web/frequent"
              element={<Frequent />}
            />
            <Route exact path="/open-spot-web/sports" element={<Sports />} />
            <Route exact path="/open-spot-web/chill" element={<Chill />} />
            <Route exact path="/open-spot-web/news" element={<News />} />
            <Route exact path="/open-spot-web/new-spot" element={<NewSpot />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
