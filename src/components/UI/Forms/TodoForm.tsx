import React, { useState } from 'react';
import { Form, Input, InputNumber, Button ,Modal } from 'antd';

type DialogProps = {
    title: string,
    isOpen:boolean,
    children?: React.ReactNode;
    handleSubmit:{ (values:any): void };
    handleClose:{ (): void };

}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const TodoForm = ({ isOpen,handleSubmit,handleClose,title, children }: DialogProps) => {
    const [isModalVisible, setIsModalVisible] = useState(isOpen);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        handleClose();
    };
    const onFinish = (values: any) => {
        console.log(values);
        handleSubmit(values);
    };
    const validateMessages = {
        required: '${label} is required!',
    };
    return (
        <Modal title={title} visible={isModalVisible} onCancel={handleCancel}
               footer={[
               ]}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['todo', 'title']} label="Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['todo', 'description']} label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}
export default TodoForm;
