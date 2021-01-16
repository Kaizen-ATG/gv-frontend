import styled from "styled-components";
import { MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const CellGroup = styled(LinkR)`
  margin: 0 20px auto;
  display: grid;
  grid-template-columns: 60px auto 30px;
  grid-gap: 24px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translate(5px, 0px);
  }
`;
export const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: #f6f6f6;
  /* opacity: 0.3;
  filter: grayscale(100%); */
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: 60px;
`;
export const CellTitle = styled.div`
  color: #0ea44b;
  font-size: 20px;
  font-weight: 600;
  /*padding: 30px 0;*/
`;
export const CellContent = styled.div`
  display: grid;
  align-items: center;
`;
export const CellPoints = styled.div`
  padding: 12px 0;
  display: grid;
  grid-template-columns: 14px auto;
  grid-gap: 12px;
`;

export const Discount = styled(MediumText)`
  color: ${themes.light.text2};
  align-self: center;
  margin-left: -6px;
  font-size: 13px;
  font-weight: 500;
`;

export const BagIconTick = styled(IoBagCheckOutline)`
  font-size: 14px;
  color: #0ea44b;
`;

export const NavItem = styled.div`
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  height: 100%;
`;

export const NavBtn = styled.div`
  font-weight: 600;
  align-items: center;
`;

export const RightArrowIcon = styled(FaChevronRight)`
  font-weight: 800;
  color: #0ea44b;
`;
