/* eslint-disable react/prop-types */
import RoomBedsInfo from './RoomBedsInfo.jsx';
import Summary from './Summary.jsx';
import briefInfo from '../../brief-info.json';
import ReservationCard from '../ReservationCard.jsx';

const accommodation = briefInfo.accommodationInfo[0];

function BriefInfo() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-8/12 border-b border-solid border-gray-200">
        <Summary
          locationName={accommodation.locationName}
          briefRoomInfo={accommodation.briefRoomInfo}
          guestFavorite={accommodation.guestFavorite}
          rating={accommodation.rating}
          reviewCount={accommodation.reviewCount}
        />
        {accommodation.roomInfo.length > 0 && <RoomBedsInfo roomInfo={accommodation.roomInfo} />}
      </div>
      <div className="flex w-4/12 justify-end pt-8">
        <ReservationCard />
      </div>
    </div>
  );
}

export default BriefInfo;
