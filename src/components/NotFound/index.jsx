import { useConstants } from '../../hooks/useConstants'
import { SelectPlanContainer, TitleMain, Title, Description } from './styles'

export const NotFound = () => {
  const { WELLCOME } = useConstants()

  return (
    <SelectPlanContainer>
      <Title>{WELLCOME.TITLE}</Title>
      <TitleMain>{'Open Spot'}</TitleMain>
      <Description>{WELLCOME.DESCRIPTION}</Description>
    </SelectPlanContainer>
  )
}
