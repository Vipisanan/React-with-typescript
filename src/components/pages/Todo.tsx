import React,{Component} from "react";
import CustomButton from "../UI/atoms/CustomButton";
import CustomDialog from '../UI/atoms/Dialog'

class Todo extends Component< any, any >{
    constructor(props:any){
        super(props);
        this.state = {
            isOpen:false
        }
    }
    handleSubmit=()=>{
        console.log(this.state.isOpen);
       this.setState({isOpen:false})
    }
    handleClose(){
       this.setState({isOpen:false})
    }
    public render() {
        const {isOpen} = this.state;
        return(
            <div>
                <CustomButton text={'Submit from p'}
                              buttonClick={()=> this.setState({isOpen:true})}/>
                {isOpen && (
                    <CustomDialog title={"tit"}
                                  isOpen={isOpen}
                                  handleSubmit={()=>this.handleSubmit()}
                                  handleClose={()=>this.setState({isOpen:false})}>
                        <h1>vipi</h1>
                    </CustomDialog>
                )}

            </div>
        )
    }
}
export default Todo;
