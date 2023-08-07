import { SelectPlanContainer, Title, Description } from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const Chill = () => {
  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'Chill'}</Title>
      <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description>
    </SelectPlanContainer>
  )
}
