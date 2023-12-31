import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors'

export const BottomBarContainer = styled.div`
  grid-area: bottomBarContainer;
  background-color: ${(props) => (props.stage === 5 ? 'none' : '#fff')};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 15px;

  @media screen and (min-width: 768px) {
    background: none;
    padding: 10px 45px;
  }
`
export const GoBackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--grey, #9699aa);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px;
  text-decoration: none;
  width: 123px;
  height: 48px;
  border: none;
  background-color: white;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 768px) {
  }
`

export const NewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px;
  background: ${BACKGROUND_COLORS.BLACK};
  color: #fff;
  text-decoration: none;
  width: 150px;
  height: 48px;
  margin-top: 11px;
  margin-bottom: 25px;
  float: right;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.19);
`

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SwitchImage = styled.img`
  height: 75px;
  padding-right: 15px;
  padding-bottom: 25px;
`

export const LanguageTitle = styled.label`
  color: ${(props) =>
    props.language === 'en' ? TEXT_COLORS.BLUE_OWN : TEXT_COLORS.HEADER};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  padding-bottom: 25px;
`
