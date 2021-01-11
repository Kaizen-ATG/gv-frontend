import styled from "styled-components";

export const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #785399;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto 24px;

  @media (max-width: 640px) {
  }
`;

export const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;

  @media (max-width: 640px) {
    margin: 0 auto 20px;
  }
`;
