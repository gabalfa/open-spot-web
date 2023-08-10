import { BottomBarContainer, NextStepButton, GoBackButton } from './styles'

export const BottomBar = () => {
  return (
    <BottomBarContainer>
      {/* <GoBackButton to="/open-spot-web/">News</GoBackButton> */}
      {/* <NextStepButton to="/open-spot-web/sports">Spots</NextStepButton> */}
      <NextStepButton to="/open-spot-web/new-spot">New Spot</NextStepButton>
    </BottomBarContainer>
  )
}
