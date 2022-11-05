import DashBoardTitle from 'components/dashBoard/DashBoardTitle';
import TotalStatus from 'components/dashBoard/totalStatus/TotalStatus';
import Layout from 'components/layout/Layout';
import { TrendProvider } from 'context/trendContext';

const DashBoard = () => {
  return (
    <Layout>
      <TrendProvider>
        <DashBoardTitle dashboard />
        <TotalStatus />
      </TrendProvider>
    </Layout>
  );
};
export default DashBoard;
