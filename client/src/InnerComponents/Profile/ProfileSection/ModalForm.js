import React from "react";
import { Modal, Form, Input, Radio } from "antd";

const ModalForm = ({ visible, onCancel, onCreate, form }) => {
  //const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="Form within a Modal"
      okText="Submit"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        {/* <Form.Item label="Title">
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Please input the title of collection!"
              }
            ]
          })(<Input />)}
        </Form.Item> */}
        <Form.Item label="Title" name="title" rules={[{required: true,
                message: "Please input the title of collection!"}]}>
            <Input />
        </Form.Item>
        {/* <Form.Item label="Description" name="description">
          {getFieldDecorator("description")(<Input type="textarea" />)}
        </Form.Item> */}        
        <Form.Item label="Description" name="description">
            <Input type="textarea" />
        </Form.Item>

      </Form>
    </Modal>
  );
};

//const ModalForm = Form.create({ name: "modal_form" })(ModalFormComponent);

export default ModalForm;
