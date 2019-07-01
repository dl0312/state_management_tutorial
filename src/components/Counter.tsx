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

interface ICounter {
  number: number;
  color: string;
  onIncrement: any;
  onDecrement: any;
  onSetColor: any;
}

const Counter = ({
  number,
  color,
  onIncrement,
  onDecrement,
  onSetColor
}: ICounter) => {
  return (
    <Container
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e: any) => {
        e.preventDefault();
        onDecrement();
      }}
      style={{ backgroundColor: color }}
      onDoubleClick={onSetColor}
    >
      {number}
    </Container>
  );
};

export default Counter;
