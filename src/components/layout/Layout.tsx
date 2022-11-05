import SideBar from 'components/sideBar/SideBar';
import React from 'react';
import S from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <S.Section>
      <SideBar />
      <S.Main>{children}</S.Main>
    </S.Section>
  );
};
export default Layout;
