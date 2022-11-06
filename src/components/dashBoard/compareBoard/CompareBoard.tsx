import { CompareData } from 'model/types';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { formatData } from 'utils';
import S from './styles';

interface Props {
  item: CompareData;
}

const CompareBoard: React.FC<Props> = ({ item }) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{item.title}</S.Title>
      </S.TitleContainer>
      <S.GapContainer>
        <S.TotalSumBox>
          <S.TotalSum>{item.currentSum}</S.TotalSum>
        </S.TotalSumBox>
        <S.GapWithIconBox>
          {item.isIncrease ? (
            <S.Icon>
              <AiFillCaretUp style={{ color: 'green' }} />
            </S.Icon>
          ) : (
            <S.Icon>
              <AiFillCaretDown style={{ color: 'red' }} />
            </S.Icon>
          )}

          <S.GapBox>
            <S.Gap>{item.gap === 0 ? '' : item.gap}</S.Gap>
          </S.GapBox>
        </S.GapWithIconBox>
      </S.GapContainer>
    </S.Container>
  );
};
export default CompareBoard;
