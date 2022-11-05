import LogoImage from '../../assets/Lever_BI.png';
import Navigate from './navigate/Navigate';
import S from './styles';

const SideBar = () => {
  return (
    <S.Section>
      <S.LogoContainer>
        <S.Logo src={LogoImage} />
      </S.LogoContainer>
      <S.Bar />
      <S.SelectContainer>
        <S.ServiceTitle>서비스</S.ServiceTitle>
        <S.SelectBox>
          <S.Select name="list" id="select">
            <option value="madUp">매드업</option>
            <option value="addService">서비스 추가하기</option>
          </S.Select>
        </S.SelectBox>
      </S.SelectContainer>
      <S.NavigateContainer>
        <S.AdCenterTitle>광고 센터</S.AdCenterTitle>
        <Navigate />
      </S.NavigateContainer>
    </S.Section>
  );
};
export default SideBar;
