import DashBoardTitle from 'components/dashBoard/DashBoardTitle';
import TotalStatus from 'components/dashBoard/TotalStatus';
import Layout from 'components/layout/Layout';

const DashBoard = () => {
  return (
    <Layout>
      <DashBoardTitle dashboard />
      <TotalStatus />
    </Layout>
  );
};
export default DashBoard;
