import { useContext } from 'react'

import { GlobalContext } from '../context/Global'
import { ConstantsContext } from '../context/Constants'

export function useConstants() {
  const { language } = useContext(GlobalContext)

  const { UI_TEXT_EN, UI_TEXT_ES, BACKGROUND_COLORS, TEXT_COLORS } =
    useContext(ConstantsContext)

  const LANGUAGE_TEXT = {
    WELLCOME: language ? UI_TEXT_EN.WELLCOME : UI_TEXT_ES.WELLCOME,
    HEADER: language ? UI_TEXT_EN.HEADER : UI_TEXT_ES.HEADER,
    SPOTS: language ? UI_TEXT_EN.SPOTS : UI_TEXT_ES.SPOTS,
    BOTTOM_BAR: language ? UI_TEXT_EN.BOTTOM_BAR : UI_TEXT_ES.BOTTOM_BAR,
    OPEN_SPOT_BAR: language
      ? UI_TEXT_EN.OPEN_SPOT_BAR
      : UI_TEXT_ES.OPEN_SPOT_BAR,
    NEW_SPOT: language ? UI_TEXT_EN.NEW_SPOT : UI_TEXT_ES.NEW_SPOT,
  }

  return {
    ...LANGUAGE_TEXT,
    BACKGROUND_COLORS,
    TEXT_COLORS,
  }
}
