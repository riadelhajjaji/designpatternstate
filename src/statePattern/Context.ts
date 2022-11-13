import RedState from "./RedState";
import State from "./State";


export default class Context  {
    state:State|null = null; 
    
    constructor (state?:State) {
        if(state)
       { this.state = state;}
       else{
        this.state = new RedState();
       }
    }

    
    // Returns the state.
   getState=()=>{return this.state }
    // Sets the state.
     setState =(state:State)=>{this.state = state;}

    /** The push() method performs different actions depending
     * on the state of the object. Using the State pattern,
     * We delegate this behavior to our contained state object.
     */
 push=()=>{
    if(this.state)this.state.handlePush(this); 
}

    /** *The pull() method performs different actions depending
     * on the state of the object. Using the State pattern,
     * we delegate this behavior to our contained state object.
    */
      pull=()=>{ if(this.state)this.state.handlePull(this); }
}
