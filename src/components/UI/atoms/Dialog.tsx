import React, { useState } from 'react';
import { Modal, Button } from 'antd';

type DialogProps = {
    title: string,
    isOpen:boolean,
    children?: React.ReactNode;
    handleSubmit:{ (): void };
    handleClose:{ (): void };

}
const Dialog = ({ isOpen,handleSubmit,handleClose,title, children }: DialogProps) => {
    const [isModalVisible, setIsModalVisible] = useState(isOpen);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        handleSubmit();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        handleClose();
    };
    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
    );
}
export default Dialog;
