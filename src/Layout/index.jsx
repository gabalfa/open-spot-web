import { Outlet } from 'react-router-dom'

import { OpenSpotBar } from '../components/OpenSpotBar'
import { ContentView } from '../Components/ContentView'
import { BottomBar } from '../Components/BottomBar'

import { LayoutContainer } from './styles'

export const Layout = () => {
  return (
    <LayoutContainer>
      <OpenSpotBar />
      <ContentView>
        <Outlet />
      </ContentView>
      <BottomBar />
    </LayoutContainer>
  )
}
