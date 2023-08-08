import {
  StepBarContainer,
  StepBarCard,
  // LabelStep,
  DescriptionCard,
  LabelDescription,
  LabelDescriptionStep,
  MenuImages,
} from './styles'

import frequent from '../../assets/openspot-images/icons8-location-64-blue.png'
import sports from '../../assets/openspot-images/icons8-sports-48.png'
import chill from '../../assets/openspot-images/icons8-holiday-48.png'
import news from '../../assets/openspot-images/icons8-megaphone-48.png'

export const OpenSpotBar = () => {
  return (
    <StepBarContainer>
      <StepBarCard to="/open-spot-web/frequent">
        {/* <LabelStep active={stage === 3 ? 'active' : 'no-active'}></LabelStep> */}
        <MenuImages src={frequent} alt="location" />
        <DescriptionCard>
          <LabelDescription>DAILY</LabelDescription>
          <LabelDescriptionStep>FREQUENT PLACES</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard>
      <StepBarCard to="/open-spot-web/sports">
        {/* <LabelStep active={stage === 1 ? 'active' : 'no-active'}>1</LabelStep> */}
        <MenuImages src={sports} alt="sports" />
        <DescriptionCard>
          <LabelDescription>SPORTS</LabelDescription>
          <LabelDescriptionStep>WORKOUT</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard>
      <StepBarCard to="/open-spot-web/chill">
        {/* <LabelStep active={stage === 2 ? 'active' : 'no-active'}>2</LabelStep> */}
        <MenuImages src={chill} alt="chill" />
        <DescriptionCard>
          <LabelDescription>RELAX</LabelDescription>
          <LabelDescriptionStep>PLACES TO CHILL</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard>
      <StepBarCard to="/open-spot-web/news">
        {/* <LabelStep active={stage === 3 ? 'active' : 'no-active'}>3</LabelStep> */}
        <MenuImages src={news} alt="news" />
        <DescriptionCard>
          <LabelDescription>NEWS</LabelDescription>
          <LabelDescriptionStep>ABOUT SPORTS</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard>
    </StepBarContainer>
  )
}
