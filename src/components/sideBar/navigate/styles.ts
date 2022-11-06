import styled from 'styled-components';
import { SelectBox } from '../Shared';

const PageContainer = styled(SelectBox)`
  border: 0;
  @media screen and (max-width: 1280px) {
    width: 80%;
  } ;
`;

const IconBox = styled.div`
  margin-right: 12px;
  color: rgb(2 132 199);
`;

const PageName = styled.span`
  color: rgb(2 132 199);
`;

const S = {
  PageContainer,
  IconBox,
  PageName,
};

export default S;
