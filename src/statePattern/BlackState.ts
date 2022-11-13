import Color from './Color';
import Context from './Context';
import RedState from './RedState';
import State from './State';

export default class BlackState implements State {
 
  handlePush(c: Context) {
    c.setState(new RedState());
  }
  handlePull = (c: Context) => {
    c.setState(new RedState());
  };
  getColor() {
    return Color.black;
  }
}
