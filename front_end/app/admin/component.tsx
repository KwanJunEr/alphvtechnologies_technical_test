"use client";
import AdminHeader from "@/components/Header";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { apiClient } from "../api/auth/repository";

const Component = ({ dataColumns,fetchTableData, tableData, loading}: any) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm(); // Get form instance

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };


  useEffect(()=>{
    fetchTableData();
  },[]);

  const submitData = async () => {
    try{

      const values = await form.validateFields();

      const response = await apiClient.post('/submitshape', values);

      message.success("Shape submitted successfully!");

      setOpen(false);
      form.resetFields();
      fetchTableData();
      console.log("Response:", response.data);
    }catch(error){
      console.error("Error submitting data: ", error);
      message.error("Error submitting shape data");
    }
  };
  return (
    <div>
      <AdminHeader />
      {/* This is the header with add record and the title*/}
      <div className="px-6 ">
        <h1 className="text-2xl text-black font-semibold mt-3">
          Admin Portal{" "}
        </h1>
        <div className="mt-5 flex justify-between w-full ">
          Add your data here
          <Button onClick={showModal}>Add Shapes Data</Button>
          <Modal
            centered
            open={open}
            title="Add Shapes Data"
            onOk={showModal}
            onCancel={closeModal}
            footer={[
              <Button key="back" onClick={closeModal}>
                Return
              </Button>,
              <Button key="submit" type="primary" onClick={submitData}>
                Submit
              </Button>,
            ]}
          >
            <Form
              form = {form}
              layout="vertical"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <div className="font-bold">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Input Name" />
                </Form.Item>
                <Form.Item
                  label="Shape"
                  name="shape"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select Shape">
                    <Select.Option value="circle">Circle</Select.Option>
                    <Select.Option value="triangle">Triangle</Select.Option>
                    <Select.Option value="square">Square</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Color"
                  name="color"
                  rules={[{ required: true }]}
                >
                  <Select placeholder = "Select Color">
                    <Select.Option value="red">Red</Select.Option>
                    <Select.Option value="blue">Blue</Select.Option>
                    <Select.Option value="green">Green</Select.Option>
                    <Select.Option value="yellow">Yellow</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </Form>
          </Modal>
        </div>

        <div className="mt-4">
          <p className="font-bold text-sm">Shapes Table Data</p>
          <div className="mt-3">
            <Table columns={dataColumns} 
            dataSource={tableData}
            rowKey= "id"
            loading = {loading} 
            bordered 
            className="font-bold"
          
            />
          </div>
        </div>
      </div>
      {/* The table for all of the records with update and delete button*/}
    </div>
  );
};

export default Component;
