import { useSpots } from '../../hooks/useSpots'
import { useConstants } from '../../hooks/useConstants'

import { BottomBarContainer, NextStepButton, SwitchImage } from './styles'

import english from '../../assets/openspot-images/icons8-switch-en-96.png'
import spanish from '../../assets/openspot-images/icons8-switch-es-96.png'

export const BottomBar = () => {
  const { language, setLanguage } = useSpots()
  const { BOTTOM_BAR } = useConstants()

  const toggleSwitch = () => {
    setLanguage((prevState) => !prevState)
  }

  return (
    <BottomBarContainer>
      {language ? (
        <SwitchImage src={english} alt="lan" onClick={toggleSwitch} />
      ) : (
        <SwitchImage src={spanish} alt="lan" onClick={toggleSwitch} />
      )}
      <NextStepButton to="/open-spot-web/new-spot">
        {BOTTOM_BAR.ADD_BUTTON}
      </NextStepButton>
    </BottomBarContainer>
  )
}
