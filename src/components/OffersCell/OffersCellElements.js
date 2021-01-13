import styled from "styled-components";
import { IoBagCheckOutline } from "react-icons/io5";

export const CellGroup = styled.div`
  margin: 0 20px auto;
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 24px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
export const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: #f6f6f6;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: 60px;
`;
export const CellTitle = styled.div`
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

export const Discount = styled.div`
  align-self: center;
  margin-left: -6px;
  font-size: 13px;
  font-weight: 500;
  color: #0ea44b;
`;

export const BagIconTick = styled(IoBagCheckOutline)`
  font-size: 14px;
  color: #0ea44b;
`;
