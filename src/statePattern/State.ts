import Context from "./Context";

export default interface State {
    handlePush:(context:Context)=>void;
    handlePull:(context:Context)=>void;
    getColor:()=>string;
}
