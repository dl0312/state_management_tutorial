import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../utils";

interface State {
  colorData: {
    color: string;
  };
  numberData: {
    number: number;
  };
}

// store 안의 state 값을 props로 연결해줍니다.
const mapStateToProps = (state: State) => ({
  color: state.colorData.color,
  number: state.numberData.number
});

/*
    액션 생성자를 사용하여 액선을 생성하고,
    해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch: any) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

// Container of Counter Component
// Connecting Counter Component to the data layer of application

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
