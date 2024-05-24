/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import guests from '../../filter-guests.json';

const {initialState} = guests;

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_ADULTS':
      return { ...state, adults: state.adults + 1 };
    case 'DECREASE_ADULTS':
      return { ...state, adults: state.adults - 1 };
    case 'INCREASE_CHILDREN':
      return { ...state, children: state.children + 1 };
    case 'DECREASE_CHILDREN':
      return { ...state, children: state.children - 1 };
    case 'INCREASE_INFANTS':
      return { ...state, infants: state.infants + 1 };
    case 'DECREASE_INFANTS':
      return { ...state, infants: state.infants - 1 };
    case 'INCREASE_PETS':
      return { ...state, pets: state.pets + 1 };
    case 'DECREASE_PETS':
      return { ...state, pets: state.pets - 1 };
    default:
      return state;
  }
};

export const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GuestContext.Provider value={{ state, dispatch }}>
      {children}
    </GuestContext.Provider>
  );
};
