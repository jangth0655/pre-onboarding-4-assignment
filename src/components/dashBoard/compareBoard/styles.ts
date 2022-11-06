import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  height: 79px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgb(243 244 246);
  border-radius: 10px;
  padding: 0 0.5rem;
`;
const TitleContainer = styled.div`
  font-size: 0.7rem;
  margin-bottom: 5px;
`;
const Title = styled.span`
  color: rgb(156 163 175); ;
`;
const GapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalSumBox = styled.div``;
const TotalSum = styled.span`
  font-weight: 700;
`;

const GapWithIconBox = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-right: 5px;
`;
const GapBox = styled.div``;
const Gap = styled.span`
  font-size: 0.6rem;
`;

const S = {
  Container,
  TitleContainer,
  Title,
  GapContainer,
  TotalSumBox,
  TotalSum,
  GapWithIconBox,
  Icon,
  GapBox,
  Gap,
};

export default S;
