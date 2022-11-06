import { useQuery } from '@tanstack/react-query';
import { trend } from 'api/apiClient';
import { trendListAtom } from 'atoms/dataAtom';
import DashBoardTitle from 'components/dashBoard/DashBoardTitle';
import TotalStatus from 'components/dashBoard/totalStatus/TotalStatus';
import Layout from 'components/layout/Layout';
import useLoading from 'hooks/useLoading';
import { Report } from 'model/interface';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const DashBoard = () => {
  const isLoading = useLoading();
  const setTrendList = useSetRecoilState(trendListAtom);
  const { data } = useQuery<Report>(['trend'], () => trend, {
    staleTime: 1000 * 60 * 50,
    cacheTime: 1000 * 60 * 50,
  });

  useEffect(() => {
    if (!data?.report.daily) return;
    setTrendList(data?.report.daily);
  }, []);

  return (
    <Layout>
      <DashBoardTitle dashboard />
      {isLoading ? 'loading...' : <TotalStatus />}
    </Layout>
  );
};
export default DashBoard;
