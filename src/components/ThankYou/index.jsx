import {
  ThankYouContainer,
  CheckIconStyled,
  Title,
  Description,
} from './styles'

export const ThankYou = () => {
  return (
    <ThankYouContainer>
      <CheckIconStyled />
      <Title>Thank You!</Title>
      <Description>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Description>
    </ThankYouContainer>
  )
}
