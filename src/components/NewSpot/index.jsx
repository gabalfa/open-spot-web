import { useSpots } from '../../hooks/useSpots'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SelectPlanContainer, Title, Description } from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const NewSpot = () => {
  const { newSpot, setNewSpot } = useSpots()

  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'Add a new spot!'}</Title>
      <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description>

      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_MAPS_API_KEY}
        selectProps={{
          value: newSpot,
          onChange: setNewSpot,
        }}
      />
    </SelectPlanContainer>
  )
}
