import {useState} from "react";
import {Button} from "@mui/material";
import {Modal} from "antd";

/**
 * Modal_Alert component that shows a modal and handles API calls.
 * @param {Function} asyncApiFunc - An async function that performs an API call.
 */
const Modal_Alert = ({asyncApiFunc}) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    // Mark the handleOk function as an async function
    const handleOk = async () => {
        setLoading(true);
        try {
            // Await the async API function
            await asyncApiFunc();
        } catch (error) {
            console.error('Error during API call', error);
        }
        setLoading(false);
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with customized footer
            </Button>
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>

                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default Modal_Alert;