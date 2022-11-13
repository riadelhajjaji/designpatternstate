import BlackState from './BlackState';
import Color from './Color';
import Context from './Context';
import GreenState from './GreenState';
import State from './State';

export default class BlueState implements State{
 
  handlePush(c: Context) {
    c.setState(new GreenState());
  }
  handlePull = (c: Context) => {
    c.setState(new BlackState());
  };
  getColor() {
    return Color.blue;
  }
}
