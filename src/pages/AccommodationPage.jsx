import { useParams } from 'react-router-dom';
import DetailPageBanner from '../components/DetailPageBanner.jsx';
import Layout from '../components/Layout/Layout.jsx';
import HostDetail from '../components/hostDetail/HostDetail.jsx';
import BriefInfo from '../components/briefInfo/BriefInfo.jsx';
import AmenityInfo from '../components/briefInfo/AmenityInfo.jsx';

function AccommodationPage() {
  const { id } = useParams();

  return (
    <>
      <Layout>
        {/* 여기 넣으세요!@ */}
        <DetailPageBanner id={id} />
        <BriefInfo id={id} />
        <AmenityInfo id={id} />
        <HostDetail id={id} />
      </Layout>
    </>
  );
}

export default AccommodationPage;
