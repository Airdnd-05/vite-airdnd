import useGuestContext from '../hooks/useGuestContext';
import guests from '../../filter-guests.json';

const GuestModal = () => {
  const { state, dispatch } = useGuestContext();

  const handleIncrement = actionType => {
    dispatch({ type: actionType });
  };

  const handleDecrement = actionType => {
    dispatch({ type: actionType });
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold">게스트 추가</h2>
      {guests.labels.map(category => (
        <div key={category.name} className="flex items-center justify-between mb-2">
          <div>
            <span className="text-lg font-semibold">{category.label}</span>
            <span className="ml-2 text-sm text-gray-500">{category.description}</span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement(category.actionType.decrease)}
              className="px-2 py-1 bg-gray-200 border rounded-l-lg hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4">{state[category.name]}</span>
            <button
              onClick={() => handleIncrement(category.actionType.increase)}
              className="px-2 py-1 bg-gray-200 border rounded-r-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestModal;
