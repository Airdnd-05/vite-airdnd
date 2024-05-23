/* eslint-disable react/prop-types */
import briefInfo from '../../brief-info.json';

const { amenities } = briefInfo.accommodationInfo[0];

const getSvgUrl = filename => new URL(`/src/assets/${filename}.svg`, import.meta.url).href;

function AmenityInfo() {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="mb-4 text-xl font-bold">숙소 편의시설</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <img src={getSvgUrl(amenity.icon)} alt={amenity.amenityName} className="w-6 h-6 mr-2" />
            <p>{amenity.amenityName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmenityInfo;
