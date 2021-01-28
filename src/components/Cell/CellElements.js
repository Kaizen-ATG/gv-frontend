import styled from "styled-components";
import { RiLeafLine } from "react-icons/ri";
import { BiCubeAlt } from "react-icons/bi";

export const CellGroup = styled.div`
  margin: 0 20px auto;
  display: grid;
  grid-template-columns: 60px auto 60px;
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

export const CellIcon = styled.div`
  width: 40px;
  height: 40px;

  background-image: url(${(props) => props.gameicon});
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
  grid-template-columns: 13px 20px 13px 20px auto;
  grid-gap: 12px;
`;

export const GreenPoints = styled.div`
  margin-left: -6px;
  font-size: 13px;
  font-weight: 800;
  color: #0ea44b;
`;

export const CarbonPoints = styled.div`
  margin-left: -6px;
  font-size: 13px;
  font-weight: 800;
  color: #785399;
`;

export const LeafIcon = styled(RiLeafLine)`
  font-size: 13px;
  color: #0ea44b;
`;

export const CarbonIcon = styled(BiCubeAlt)`
  font-size: 14px;
`;
