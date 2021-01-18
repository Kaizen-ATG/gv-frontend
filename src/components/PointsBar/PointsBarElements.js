import styled from "styled-components";

export const Container = styled.div`
  z-index: 3;
  height: 4px;
  width: 100%;
  background: #f3f3f3;
  border-radius: 2px;
  /* margin: 50px; */
  margin: 20px 30px;
`;

export const Filler = styled.div`
  height: 100%;
  background: green;
  border-radius: inherit;
  text-align: right;
`;

export const Label = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: 600;
  margin-left: -20px;
  margin-top: -18px;
  color: black;
`;
