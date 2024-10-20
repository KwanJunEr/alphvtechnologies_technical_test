"use client";
import React from "react";
import Component from "./component";
import { Button, Form, Input, message, Modal , Select} from "antd";
import { useState } from "react";
import Image from "next/image";
import { apiClient } from "../api/auth/repository";


const AdminPage = () => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const[selectedShape, setSelectedShapeId] = useState();
  const [tableData, setTableData] = useState([]); // Manage table data here
  const [loading, setLoading] = useState(false); // State to handle loading
  const [form] = Form.useForm(); 


  const fetchTableData = async () =>{
    try{
      setLoading(true);
      const response = await apiClient.get("/adminshapedetails");
      setTableData(response.data);
      console.log(response.data);
      setLoading(false);
    }catch(error){
      console.error("Error fetching data: ", error);
      console.error("Failed to load table data");
      setLoading(false);
    }
  }
 

  {/* Functions for Delete Modal*/}

  const showDeleteModal = () => {
    setdeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setdeleteModalOpen(false);
  };



  {/* Delete Function */}
  const deleteShape = async (id : any) =>{
    try{
      const response = await apiClient.delete(`/adminshapedetails/${id}`);
      if(response.status == 204){
        message.success("Shape Data Deleted Successfully");
        console.log("Shape Deleted Successfully")
        fetchTableData();
      }
    }catch(error){
      message.error("Failed to delete shape data")
      console.error("Failed to delete shape data: ", error);

    }
  }

  const handleDelete = async () =>{
    await deleteShape(selectedShape);
    setdeleteModalOpen(false);
  }


  {/* Functions for Update Modal */}

  const handleUpdate = async ()=>{
    await updateShape(selectedShape);
    setUpdateModalOpen(false);
  }

  const showUpdateModal = async (id:any) => {
    setSelectedShapeId(id);
    try{
      const response = await apiClient.get(`adminshapedetails1/${id}`);
      const shapeData = response.data;
      console.log("Shape data fetched:", shapeData); 
      form.setFieldsValue({
        name: shapeData.name,   // Backend should return name as 'name'
        shape: shapeData.shape, // Backend should return shape as 'shape'
        color: shapeData.color, // Backend should return color as 'color'
      });

      setUpdateModalOpen(true);
    }catch(error){
      message.error("Failed to get shape data for update")
      console.error("Error fetching shape data: ", error);
    }
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const updateShape = async (id:any) => {
    try{
      const values = await form.validateFields();
      await apiClient.put(`currentshapedetails/${id}`, values);
      message.success("Shape Data Updated Successfully");
      console.log("Shape Updated Successfully")
      fetchTableData();

    }catch(error){
      message.error("Failed to update shape data");
      console.error("Error updating shape data", error);
    }
   
  };
  const columns = [
    {
      title: "Timestamp",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "actions",
      align: "center",
      render: (id : any) => (
        <div className="flex gap-3 justify-center w-full">
          <Button
            className="bg-red-600 text-white"
            type="default"
            onClick={()=>{
              showDeleteModal();
              setSelectedShapeId(id);
            }}

          >
            Delete
          </Button>

          <Button
            className="bg-green-400 text-white"
            type="default"
            onClick={()=> {
              showUpdateModal(id)
              setSelectedShapeId(id)
            }
            }
            // disabled={record?.status === "CANCELLED"}
          
          >
            Update
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Component dataColumns={columns}
      fetchTableData = {fetchTableData}
      tableData = {tableData}
      loading = {loading}
      
      />

      <Modal
        open={updateModalOpen}
        title="Add Shapes Data"
        onOk={showUpdateModal}
        onCancel={closeUpdateModal}
        footer={[
          <Button key="back" onClick={closeUpdateModal}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdate}>
            Update Data
          </Button>,
        ]}
      >
        <Form
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          form = {form}
        >
          <div>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input placeholder="Input Name" />
            </Form.Item>
            <Form.Item label="Shape" name="shape" rules={[{ required: true }]}>
            <Select placeholder="Select Shape">
                    <Select.Option value="circle">Circle</Select.Option>
                    <Select.Option value="triangle">Triangle</Select.Option>
                    <Select.Option value="square">Square</Select.Option>
                  </Select>
            </Form.Item>
            <Form.Item label="Color" name="color" rules={[{ required: true }]}>
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

      <Modal
        centered
        open={deleteModalOpen}
        onOk={showDeleteModal}
        onCancel={closeDeleteModal}
        footer={[
          <Button key="back" onClick={closeDeleteModal}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleDelete}
          >
            Delete
          </Button>,
        ]}
      >
        <div className="flex flex-col space-y-5 w-full justify-between">
            <p className="font-bold text-lg text-red-600">Confirm Data Deletion</p>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPage;
