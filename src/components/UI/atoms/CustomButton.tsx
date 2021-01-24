import React,{Component} from "react";

class CustomButton extends Component<ButtonProps, {}>{
    constructor(props:any) {
        super(props);
    }
    public static defaultProps: Partial<ButtonProps> = {
        tailwindClass: "w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700",
        text:"submit",
    };
    handleSubmit(){
        const {buttonClick} = this.props;
        buttonClick();
    }
    public render() {
        const {tailwindClass , text}=this.props;
        return(
            <div>
                <button
                    onClick={()=>this.handleSubmit()}
                    className={tailwindClass}>
                    {text}
                </button>
            </div>
        )
    }
}
interface ButtonProps {
    tailwindClass: string;
    text: string;
    buttonClick:{ (): void };
}

export default CustomButton;
