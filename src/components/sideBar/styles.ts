import styled from 'styled-components';
import { SelectBox, SubTitle } from './Shared';

const Section = styled.section`
  width: 20rem;
  background-color: white;
  padding-left: 2.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media screen and (max-width: 1024px) {
    width: 10rem;
    padding-left: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 9.375rem;
`;

const Logo = styled.img`
  width: 7.75rem;
  height: 1.875rem;
  @media screen and (max-width: 1024px) {
    width: 5rem;
    height: 1rem;
  }
`;

const Bar = styled.div`
  width: 90%;
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

const ServiceBox = styled(SelectBox)`
  border: 1px solid rgb(75 85 99);
  @media screen and (max-width: 1536px) {
    width: 80%;
  } ;
`;

const Select = styled.select`
  outline: none;
  border: none;
  width: 90%;
  margin: auto;
`;

const NavigateContainer = styled.div`
  width: 15rem;
`;
const AdCenterTitle = styled(SubTitle)``;

const S = {
  Section,
  LogoContainer,
  Logo,
  Bar,
  SelectContainer,
  ServiceTitle,
  ServiceBox,
  Select,
  NavigateContainer,
  AdCenterTitle,
};

export default S;
