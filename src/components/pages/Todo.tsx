import React, {Component} from "react";
import CustomButton from "../UI/atoms/CustomButton";
import TodoForm from "../UI/Forms/TodoForm";
import {Card, Col, Row, Space} from 'antd';
import {ReactComponent as Close} from "../../assets/icon/close.svg";
import {findIndex ,isEmpty} from 'lodash';

interface Task {
    title: string;
    description: string;
    isDone: boolean;
}

interface IState {
    isOpen: boolean;
    newTask?: string;
    tasks?: Array<Task>;
}

class Todo extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            tasks: [
                {
                    title: "title 1",
                    description: "hi ",
                    isDone: false
                },
                {
                    title: "title 2",
                    description: "hi ",
                    isDone: false
                },
                {
                    title: "title 3",
                    description: "hi ",
                    isDone: true
                },
            ]
        }
    }

    handleSubmit = (value: any) => {
        const newTask: Task = {...value.todo, isDone: false}
        this.setState((prevState) => ({
            isOpen: false,
            tasks: [...(prevState.tasks ?? []), newTask]
        }));
    }

    handleClose() {
        this.setState({isOpen: false})
    }

    removeTodo=(item:Task)=>{
        const {tasks} = this.state;
        this.setState({tasks:tasks?.filter((task ,i)=>task!==item)})
    }

    moveToDone=({description, isDone, title}: Task)=>{
        const {tasks} = this.state;
        let index: number | undefined;
        index = findIndex(tasks ,{title ,description, isDone});
        if (tasks && index) {
            tasks[index].isDone = true;
        }
        this.setState({tasks:tasks})
    }

    public render() {
        const {isOpen , tasks} = this.state;
        return (
            <div className="p-9 ">
                <Row>
                    <Col span={12} offset={6}>
                        <CustomButton text={'Add task'}
                                      buttonClick={() => this.setState({isOpen: true})}/>
                    </Col>
                </Row>

                {isOpen && (
                    <TodoForm title={"Add task"}
                              isOpen={isOpen}
                              handleSubmit={(value) => this.handleSubmit(value)}
                              handleClose={() => this.setState({isOpen: false})}>
                    </TodoForm>
                )}
                {!isEmpty(tasks) && (
                    <Row className="p-9 flex">
                        <Col className="grid justify-items-center" span={12}>
                            <div className="text-3xl">Todo</div>
                            <Space direction="vertical">
                                {tasks?.filter(item => item.isDone === false).map((task,index) =>{
                                    return (
                                        <Card title={task.title}
                                              extra={
                                                  <Row className="flex items-center">
                                                      <Col className="m-1" span={11}
                                                           onClick={()=>this.moveToDone(task)}>
                                                          DONE
                                                      </Col>
                                                      <Col className="grid" span={1}>
                                                          <div  style={{cursor: 'pointer'}} onClick={()=>this.removeTodo(task)}>
                                                              <Close style={{width: 40}}/>
                                                          </div>
                                                      </Col>

                                                  </Row>
                                              }
                                              style={{width: 700 , backgroundColor:'#d7d6d6'}}>
                                            <p>{task.description}</p>
                                        </Card>
                                    )
                                })}

                            </Space>
                        </Col>
                        <Col span={12}>
                            <div className="text-3xl">Done</div>
                            <Space direction="vertical">
                                {tasks?.filter(item => item.isDone === true).map((task,index) =>{
                                    return (
                                        <Card title={task.title}
                                              extra={
                                                  <Row className="flex items-center">
                                                      <div  style={{cursor: 'pointer'}} onClick={()=>this.removeTodo(task)}>
                                                          <Close style={{width: 40}}/>
                                                      </div>
                                                  </Row>
                                              }
                                              style={{width: 700}}>
                                            <p>{task.description}</p>
                                        </Card>
                                    )
                                })}
                            </Space>
                        </Col>
                    </Row>
                )}

            </div>
        )
    }
}

export default Todo;
