import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors'

export const StepBarContainer = styled.div`
  grid-area: stepBarContainer;
  background-color: ${BACKGROUND_COLORS.BLACK};

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 0;

  padding: 40px 60px;

  text-align: center;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.19);

  @media screen and (min-width: 768px) {
    margin: 50px 0px 50px 50px;
    padding: 40px;
    border-radius: 10px;
    grid-template-columns: 0;
    grid-template-rows: 10% 10% 10% 10%;
  }
`

export const StepBarCard = styled(Link)`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 30px;
  width: 120px;
  text-decoration: none;
`

export const LabelStep = styled.label`
  background-color: ${(props) =>
    props.active === 'active' ? BACKGROUND_COLORS.BLANK : ''};
  color: ${(props) =>
    props.active === 'active' ? TEXT_COLORS.BODY : TEXT_COLORS.BLANK};
  border: ${(props) =>
    props.active === 'active' ? 'none' : `1px solid ${TEXT_COLORS.BLANK}`};
  border-radius: 30px;
  padding: 10px 15px;
  width: 10px;
`

export const DescriptionCard = styled.div`
  display: grid;
  width: 200px;
  @media screen and (min-width: 768px) {
    display: grid;
    width: 200px;
  }
`

export const LabelDescription = styled.label`
  color: ${TEXT_COLORS.BLANK};
  font-size: 12px;
  text-align: left;
`

export const LabelDescriptionStep = styled.label`
  color: ${TEXT_COLORS.HEADER};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
`

export const MenuImages = styled.img`
  width: 40px;
  height: 40px;
`
