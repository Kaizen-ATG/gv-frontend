import React from "react";
import styled from "styled-components";

export default function MenuButton(props) {
  const { item } = props;
  return (
    <a href="{item.link}" target="_blank" onClick={props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </a>
  );
}

const MenuItem = styled.div`
  color: #444;
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${(props) => (props.title ? "12px" : "0px")};
  align-items: center;
  padding: 10px;
  border-radius: 10px;

  :hover {
    color: #12c35a;
    background: rgba(255, 255, 255, 0.1);
  }
`;
