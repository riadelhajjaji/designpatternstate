import BlueState from './BlueState';
import Color from './Color';
import GreenState from './GreenState';
import Context from "./Context";
import State from './State';

export default class RedState implements State {
 
  handlePush(c: Context) {
    c.setState(new BlueState());
  }
  handlePull = (c: Context) => {
    c.setState(new GreenState());
  };
  getColor() {
    return Color.red;
  }
}
