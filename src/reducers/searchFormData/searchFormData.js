import {
  INPUT_CITY,
  INPUT_CLASSIFICATION,
  ADD_TO_CLASSIFICATIONS,
  SELECT_COUNTRY,
  CLEAR_FORM_INPUT,
  CLEAR_CLASSIFICATIONS,
} from '../../actions/actions'

const COUNTRIES = {
  '...': null,
  USA: 'US',
  Canada: 'CA',
  France: 'FR',
  Australia: 'AU',
  'Russian Federation': 'RU',
}
export const countries = () => COUNTRIES

export const city = (state = '', { type, payload }) => {
  switch (type) {
    case INPUT_CITY:
      return payload
    case CLEAR_FORM_INPUT:
      return payload
    default:
      return state
  }
}

export const classification = (state = '', { type, payload }) => {
  switch (type) {
    case INPUT_CLASSIFICATION:
      return payload
    case ADD_TO_CLASSIFICATIONS:
      return ''
    case CLEAR_FORM_INPUT:
      return payload
    default:
      return state
  }
}

export const classifications = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_CLASSIFICATIONS:
      return [...state, payload]
    case CLEAR_CLASSIFICATIONS:
      return payload
    default:
      return state
  }
}

export const country = (country = '', { type, payload }) => {
  switch (type) {
    case SELECT_COUNTRY:
      return payload
    case CLEAR_FORM_INPUT:
      return payload
    default:
      return country
  }
}
