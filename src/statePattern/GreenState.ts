import BlackState from "./BlackState";
import BlueState from "./BlueState";
import Color from "./Color";
import Context from "./Context";
import State from "./State";

 export default class GreenState implements State {
    
    handlePush (c:Context) {
        c.setState(new BlackState());
    }
     handlePull=( c:Context)=>{
        c.setState(new BlueState());
    }
    getColor() {return (Color.green); }
}
