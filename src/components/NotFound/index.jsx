import { SelectPlanContainer, Title, Description } from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const NotFound = () => {
  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'Thank You... but not found!'}</Title>
      <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description>
    </SelectPlanContainer>
  )
}
