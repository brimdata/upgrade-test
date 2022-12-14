import {
  SEARCH_BAR_CLEAR,
  SEARCH_BAR_INPUT_CHANGE,
  SEARCH_BAR_PARSE_ERROR,
  SEARCH_BAR_PIN,
  SEARCH_BAR_PINS_SET,
  SEARCH_BAR_PIN_EDIT,
  SEARCH_BAR_PIN_REMOVE,
  SEARCH_BAR_PIN_REMOVE_ALL,
  SEARCH_BAR_RESTORE,
  SearchBarState,
} from "./types"

export default {
  clearSearchBar: (): SEARCH_BAR_CLEAR => {
    return {type: "SEARCH_BAR_CLEAR"}
  },

  restoreSearchBar: (value: Partial<SearchBarState>): SEARCH_BAR_RESTORE => ({
    type: "SEARCH_BAR_RESTORE",
    value,
  }),

  changeSearchBarInput: (value: string): SEARCH_BAR_INPUT_CHANGE => {
    return {
      type: "SEARCH_BAR_INPUT_CHANGE",
      value: value || "",
    }
  },

  pinSearchBar: (): SEARCH_BAR_PIN => ({
    type: "SEARCH_BAR_PIN",
  }),

  editSearchBarPin: (index: number, value: string): SEARCH_BAR_PIN_EDIT => ({
    type: "SEARCH_BAR_PIN_EDIT",
    index,
    value,
  }),

  removeSearchBarPin: (index: number): SEARCH_BAR_PIN_REMOVE => ({
    type: "SEARCH_BAR_PIN_REMOVE",
    index,
  }),

  removeAllSearchBarPins: (): SEARCH_BAR_PIN_REMOVE_ALL => ({
    type: "SEARCH_BAR_PIN_REMOVE_ALL",
  }),

  setSearchBarPins: (pinned: string[]): SEARCH_BAR_PINS_SET => ({
    type: "SEARCH_BAR_PINS_SET",
    pinned,
  }),

  errorSearchBarParse: (error: string): SEARCH_BAR_PARSE_ERROR => ({
    type: "SEARCH_BAR_PARSE_ERROR",
    error,
  }),
}
