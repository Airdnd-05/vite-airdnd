import useGuestContext from '../hooks/useGuestContext';

const StatusDisplay = () => {
  const { state } = useGuestContext();

  return (
    <div className="p-4 mt-4 border rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Current Guest Status</h2>
      <p className="mb-2">Adults: <span className="font-semibold">{state.adults}</span></p>
      <p className="mb-2">Children: <span className="font-semibold">{state.children}</span></p>
      <p className="mb-2">Infants: <span className="font-semibold">{state.infants}</span></p>
      <p className="mb-2">Pets: <span className="font-semibold">{state.pets}</span></p>
    </div>
  );
};

export default StatusDisplay;
