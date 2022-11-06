import { isDashBoardAtom } from 'atoms/navigateAotm';
import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

const AdManagement = React.lazy(
  () => import('./components/adManagement/AdManagement')
);

const DashBoard = React.lazy(() => import('./components/dashBoard/DashBoard'));

const Router = () => {
  const isDashBoard = useRecoilValue(isDashBoardAtom);

  return isDashBoard ? (
    <Suspense fallback="loading">
      <DashBoard />
    </Suspense>
  ) : (
    <Suspense fallback="loading">
      <AdManagement />
    </Suspense>
  );
};
export default Router;
