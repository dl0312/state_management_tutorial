import React from "react";
import Counter from "./Counter";
import styled from 'styled-components';

const Container = styled.div`
`

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }: any) => {
    const counterList = counters.map(
        (counter: number, index: number) => (
            <Counter
                key={index}
                index={index}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );
    return (
        <Container>
            {counterList}
        </Container>
    )
}

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;