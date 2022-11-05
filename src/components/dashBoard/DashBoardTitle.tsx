import styled from 'styled-components';

const DashBoardContainer = styled.div`
  height: 80px;
  padding: 25px 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-weight: 900;
  font-size: 2rem;
`;

const DateContainer = styled.div``;

interface Props {
  dashboard?: boolean;
}

const DashBoardTitle: React.FC<Props> = ({ dashboard }) => {
  return (
    <DashBoardContainer>
      <MainTitle>대시보드</MainTitle>
      {dashboard && (
        <DateContainer>
          <select name="select" id="select">
            <option value="asd">12123</option>
          </select>
        </DateContainer>
      )}
    </DashBoardContainer>
  );
};
export default DashBoardTitle;
