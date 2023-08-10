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
  }

  return {
    ...LANGUAGE_TEXT,
    BACKGROUND_COLORS,
    TEXT_COLORS,
  }
}
