import {
  CAR_EASY_LEVEL_API,
  CAR_HARD_LEVEL_API,
  CAR_MEDIUM_LEVEL_API,
  COMPUTER_EASY_LEVEL_API,
  COMPUTER_MEDIUM_LEVEL_API,
  COMPUTER_HARD_LEVEL_API,
  FILM_EASY_LEVEL_API,
  FILM_MEDIUM_LEVEL_API,
  FILM_HARD_LEVEL_API
} from "../utils/utils";
export const reducer = (state, action) => {
  switch (action.type) {
    case "CAR_EASY_LEVEL_API":
      return { ...state, api: CAR_EASY_LEVEL_API };
    case "CAR_MEDIUM_LEVEL_API":
      return { ...state, api: CAR_MEDIUM_LEVEL_API };
    case "CAR_HARD_LEVEL_API":
      return { ...state, api: CAR_HARD_LEVEL_API };
    case "COMPUTER_EASY_LEVEL_API":
      return { ...state, api: COMPUTER_EASY_LEVEL_API };
    case "COMPUTER_MEDIUM_LEVEL_API":
      return { ...state, api: COMPUTER_MEDIUM_LEVEL_API };
    case "COMPUTER_HARD_LEVEL_API":
      return { ...state, api: COMPUTER_HARD_LEVEL_API };
      case "FILM_EASY_LEVEL_API":
        return { ...state, api: FILM_EASY_LEVEL_API };
      case "FILM_MEDIUM_LEVEL_API":
        return { ...state, api: FILM_MEDIUM_LEVEL_API };
      case "FILM_HARD_LEVEL_API":
        return { ...state, api: FILM_HARD_LEVEL_API };
    default:
      return state;
  }
};
