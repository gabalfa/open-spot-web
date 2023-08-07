import { SelectPlanContainer, Title, Description } from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const News = () => {
  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'News'}</Title>
      <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description>
    </SelectPlanContainer>
  )
}
