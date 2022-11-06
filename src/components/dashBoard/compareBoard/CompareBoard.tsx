import { CompareData } from 'model/types';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  width: 304px;
  display: flex;
  align-items: center;
`;
const TitleContainer = styled.div``;
const Title = styled.span``;
const GapContainer = styled.div``;
const TotalSumBox = styled.div``;
const TotalSum = styled.span``;
const GapBox = styled.div``;
const Gap = styled.span``;

interface Props {
  item: CompareData;
}

const CompareBoard: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{item.title}</Title>
      </TitleContainer>
      <GapContainer>
        <TotalSumBox>
          <TotalSum>{item.current}</TotalSum>
        </TotalSumBox>
        <GapBox>
          <Gap>{item.gap === 0 ? '' : item.gap}</Gap>
        </GapBox>
      </GapContainer>
    </Container>
  );
};
export default CompareBoard;
