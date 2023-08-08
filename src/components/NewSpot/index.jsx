import { useSpots } from '../../hooks/useSpots'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SelectPlanContainer, Title, Description, AddImage } from './styles'
// import { UI_TEXT_EN } from '../../constants/uiTexts'

import addButton from '../../assets/openspot-images/icons8-add-48.png'

export const NewSpot = () => {
  const { newSpot, setNewSpot, handleAddSpot } = useSpots()

  return (
    <SelectPlanContainer>
      <Title id="titleSelectPlan">{'Add a new spot!'}</Title>
      {/* <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description> */}
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_MAPS_API_KEY}
        debounce={300}
        selectProps={{
          value: newSpot,
          onChange: setNewSpot,
        }}
      />

      {newSpot == undefined ? (
        <></>
      ) : (
        <>
          <Description>
            {newSpot == undefined ? '' : 'Selecccionaste'}
          </Description>
          <Description>
            {newSpot == undefined ? '' : newSpot?.label}
          </Description>
          <AddImage src={addButton} alt="news" onClick={handleAddSpot} />
        </>
      )}
    </SelectPlanContainer>
  )
}

//
