import { SelectPlanContainer, Title, Description } from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

import { ImageWellcome, TitleMain } from './styles'
import frequent from '../../assets/openspot-images/icons8-connect-256.png'

export const NotFound = () => {
  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'Welcome to!'}</Title>
      <TitleMain id="titleSelectPlan">{'Open Spot'}</TitleMain>
      <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description>
      {/* <ImageWellcome src={frequent} alt="location" /> */}
    </SelectPlanContainer>
  )
}
