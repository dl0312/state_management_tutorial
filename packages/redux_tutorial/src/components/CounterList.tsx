import React from "react";
import Counter from "./Counter";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const Container = styled.div`
`

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }: any) => {
    const counterList = counters.map(
        (counter: any, index: number) => (
            <Counter
                key={index}
                index={index}
                {...counter.toJS()}
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

CounterList.propTypes = {
    counters: PropTypes.instanceOf(List as any),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;