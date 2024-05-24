import GuestModal from '../modals/GuestModal.jsx';
import StatusDisplay from './StatusDisplay.jsx';
import { GuestProvider } from './GuestContext.jsx';

const ContextTest = () => (
  <GuestProvider>
    <div className="flex flex-row items-center justify-around">
      <StatusDisplay />
      <GuestModal />
    </div>
  </GuestProvider>
);

export default ContextTest;
