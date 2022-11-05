import styled from 'styled-components';
import LogoImage from '../../assets/Lever_BI.png';
import { SubTitle } from './Shared';
import Navigate from './Navigate';

const Section = styled.section`
  width: 20rem;
  min-height: 100vh;
  background-color: white;
  padding-left: 2.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 9.375rem;
`;

const Logo = styled.img`
  width: 7.75rem;
  height: 1.875rem;
`;

const Bar = styled.div`
  width: 15rem;
  height: 1px;
  background-color: rgb(209 213 219);
  margin-bottom: 3.75rem;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.75rem;
`;

const ServiceTitle = styled(SubTitle)`
  font-size: 0.7rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  padding-left: 0.7rem;
  font-weight: bold;
  color: rgb(107 114 128);
`;

const SelectBox = styled.div`
  padding: 0 0.5rem;
  width: 240px;
  height: 60px;
  border: 1px solid rgb(75 85 99);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  outline: none;
  border: none;
  width: 90%;
  margin: auto;
`;

const NavigateContainer = styled.div`
  width: 240px;
`;
const AdCenterTitle = styled(SubTitle)``;

const SideBar = () => {
  return (
    <Section>
      <LogoContainer>
        <Logo src={LogoImage} />
      </LogoContainer>
      <Bar />
      <SelectContainer>
        <ServiceTitle>서비스</ServiceTitle>
        <SelectBox>
          <Select name="list" id="select">
            <option value="madUp">매드업</option>
            <option value="addService">서비스 추가하기</option>
          </Select>
        </SelectBox>
      </SelectContainer>
      <NavigateContainer>
        <AdCenterTitle>광고 센터</AdCenterTitle>
        <Navigate />
      </NavigateContainer>
    </Section>
  );
};
export default SideBar;
