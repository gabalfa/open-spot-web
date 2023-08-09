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
import sports from '../../assets/openspot-images/icons8-trophy-50.png'
import chill from '../../assets/openspot-images/icons8-holiday-48.png'
import news from '../../assets/openspot-images/icons8-megaphone-48.png'

export const OpenSpotBar = () => {
  return (
    <StepBarContainer>
      <StepBarCard to="/open-spot-web/sports">
        <MenuImages src={frequent} alt="location" />
        <DescriptionCard>
          <LabelDescription>DAILY</LabelDescription>
          <LabelDescriptionStep>PLACES</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard>
      {/* <StepBarCard to="/open-spot-web/sports">
        <MenuImages src={sports} alt="sports" />
        <DescriptionCard>
          <LabelDescription>SPORTS</LabelDescription>
          <LabelDescriptionStep>WORKOUT</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard> */}
      {/* <StepBarCard to="/open-spot-web/chill">
        <MenuImages src={chill} alt="chill" />
        <DescriptionCard>
          <LabelDescription>RELAX</LabelDescription>
          <LabelDescriptionStep>PLACES TO CHILL</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard> */}
      {/* <StepBarCard to="/open-spot-web/news">
        <MenuImages src={news} alt="news" />
        <DescriptionCard>
          <LabelDescription>NEWS</LabelDescription>
          <LabelDescriptionStep>ABOUT SPORTS</LabelDescriptionStep>
        </DescriptionCard>
      </StepBarCard> */}
    </StepBarContainer>
  )
}