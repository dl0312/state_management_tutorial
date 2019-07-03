import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../utils";

interface State {
  counters: any
}

// store 안의 state 값을 props로 연결해줍니다.
const mapStateToProps = (state: State) => ({
  counters: state.counters
});

/*
    액션 생성자를 사용하여 액선을 생성하고,
    해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch: any) => ({
  onIncrement: (index: number) => dispatch(actions.increment(index)),
  onDecrement: (index: number) => dispatch(actions.decrement(index)),
  onSetColor: (index: number) => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color}));
  }
});

// Container of Counter Component
// Connecting Counter Component to the data layer of application

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterListContainer;
