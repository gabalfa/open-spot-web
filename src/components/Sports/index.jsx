import { useSpots } from '../../hooks/useSpots'
import { SelectPlanContainer, Title, Description } from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const Sports = () => {
  const { spots } = useSpots()

  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'Sports'}</Title>
      <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description>
    </SelectPlanContainer>
  )
}
