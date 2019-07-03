import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  color: white;

  font-size: 3rem;

  border-radius: 100%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.75s;
`;


const Counter = ({
  number,
  color,
  index,
  onIncrement,
  onDecrement,
  onSetColor
}: any) => {
  return (
    <Container
      onClick={() => onIncrement(index)}
      onContextMenu={(e: any) => {
        e.preventDefault();
        onDecrement(index);
      }}
      style={{ backgroundColor: color }}
      onDoubleClick={() => onSetColor(index)}
    >
      {number}
    </Container>
  );
};

export default Counter;
