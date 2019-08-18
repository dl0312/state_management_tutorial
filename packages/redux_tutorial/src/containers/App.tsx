import React, { Component } from "react";
import Buttons from '../components/Buttons';
import CounterListContainer from "./CounterListContainer";

import { connect } from "react-redux";
import * as actions from "../modules";

import { getRandomColor } from "../utils"

interface Props {
  onCreate: any,
  onRemove: any
}

class App extends Component<Props, {}> {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div>
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// action 함수를 준비합니다.
const mapToDispatch = (dispatch: any) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index: number) => dispatch(actions.remove(index))
})

// redux에 연결시키고 내보냅니다.
export default connect(null, mapToDispatch)(App);
