import React,{Component} from "react";
import CustomButton from "../UI/atoms/CustomButton";


class Todo extends Component{

    public render() {
        return(
            <div>
                Todo
                <CustomButton text={'Submit from p'}
                              buttonClick={()=>console.log('submit')}/>
            </div>
        )
    }
}
export default Todo;
