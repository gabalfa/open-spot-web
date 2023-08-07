import { BottomBarContainer, NextStepButton, GoBackButton } from './styles'

export const BottomBar = () => {
  return (
    <BottomBarContainer>
      <GoBackButton>Cancel</GoBackButton>
      <NextStepButton to="/new-spot">New Spot</NextStepButton>
    </BottomBarContainer>
  )
}
