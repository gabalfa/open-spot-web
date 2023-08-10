import { useSpots } from '../../hooks/useSpots'
import { useConstants } from '../../hooks/useConstants'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {
  SelectPlanContainer,
  Title,
  Description,
  AddImage,
  AutocompleteContainer,
} from './styles'

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors'

import addButton from '../../assets/openspot-images/icons8-add-48.png'

export const NewSpot = () => {
  const { language, newSpot, setNewSpot, handleAddSpot } = useSpots()
  const { NEW_SPOT } = useConstants()

  return (
    <SelectPlanContainer>
      <Title>{NEW_SPOT.TITLE}</Title>

      <AutocompleteContainer>
        <GooglePlacesAutocomplete
          minLengthAutocomplete={3}
          placeholder={language ? 'es' : 'en'}
          apiKey={import.meta.env.VITE_MAPS_API_KEY}
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
          apiOptions={{
            language: language ? 'es' : 'en',
            region: language ? 'us' : 'en',
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
