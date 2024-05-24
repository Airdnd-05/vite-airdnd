import { useContext } from 'react';
import { GuestContext } from '../context/GuestContext.jsx';

const useGuestContext = () => useContext(GuestContext);

export default useGuestContext;
