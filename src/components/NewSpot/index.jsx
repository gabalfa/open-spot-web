import { useSpots } from '../../hooks/useSpots'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {
  SelectPlanContainer,
  Title,
  Description,
  AddImage,
  AutocompleteContainer,
} from './styles'

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors'
// import { UI_TEXT_EN } from '../../constants/uiTexts'

import addButton from '../../assets/openspot-images/icons8-add-48.png'

export const NewSpot = () => {
  const { newSpot, setNewSpot, handleAddSpot } = useSpots()

  return (
    <SelectPlanContainer>
      <Title>{'Add a new spot!'}</Title>

      <AutocompleteContainer>
        <GooglePlacesAutocomplete
          placeholder={'Yeah..'}
          apiKey={import.meta.env.VITE_MAPS_API_KEY}
          debounce={300}
          selectProps={{
            value: newSpot,
            onChange: setNewSpot,
            styles: {
              input: (provided) => ({
                ...provided,
                fontSize: '14px',
                color: TEXT_COLORS.BLACK,
                height: '50px',
              }),
              option: (provided) => ({
                ...provided,
                fontSize: '14px',
                color: TEXT_COLORS.HEADER,
                height: '60px',
                borderBottom: `1px solid #9699aa`,
              }),
              singleValue: (provided) => ({
                ...provided,
                fontSize: '14px',
                color: TEXT_COLORS.HEADER,
              }),
            },
          }}
        />
      </AutocompleteContainer>

      {newSpot == undefined ? (
        <></>
      ) : (
        <>
          <Description>
            {newSpot == undefined ? '' : 'Selecccionaste'}
          </Description>
          {/* <Description>
            {newSpot == undefined ? '' : newSpot?.label}
          </Description> */}
          <AddImage src={addButton} alt="add" onClick={handleAddSpot} />
        </>
      )}
    </SelectPlanContainer>
  )
}

//
