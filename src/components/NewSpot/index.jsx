import { useSpots } from '../../hooks/useSpots'
import { useConstants } from '../../hooks/useConstants'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {
  SelectPlanContainer,
  Title,
  Description,
  AddImage,
  AutocompleteContainer,
  ConfirmContainer,
} from './styles'

import { TEXT_COLORS } from '../../constants/colors'

import addButton from '../../assets/openspot-images/icons8-add-64.png'

export const NewSpot = () => {
  const { language, newSpot, setNewSpot, handleAddSpot } = useSpots()
  const { NEW_SPOT } = useConstants()

  return (
    <SelectPlanContainer>
      <Title>{NEW_SPOT.TITLE}</Title>

      <AutocompleteContainer>
        <GooglePlacesAutocomplete
          minLengthAutocomplete={3}
          apiKey={import.meta.env.VITE_MAPS_API_KEY}
          selectProps={{
            placeholder: NEW_SPOT.PLACEHOLDER,
            isClearable: true,
            escapeClearsValue: true,
            value: newSpot,
            onChange: setNewSpot,
            styles: {
              input: (provided) => ({
                ...provided,
                fontSize: '14px',
                color: TEXT_COLORS.BLACK,
                height: '30px',
              }),
              option: (provided) => ({
                ...provided,
                fontSize: '12px',
                color: TEXT_COLORS.HEADER,
                height: '50px',
                borderBottom: `1px solid #9699aa`,
              }),
              singleValue: (provided) => ({
                ...provided,
                fontSize: '16px',
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
        <ConfirmContainer onClick={handleAddSpot}>
          <AddImage src={addButton} alt="add" />
          <Description>
            {newSpot == undefined ? '' : NEW_SPOT.CONFIRM_MESSAGE}
          </Description>
        </ConfirmContainer>
      )}
    </SelectPlanContainer>
  )
}

//
