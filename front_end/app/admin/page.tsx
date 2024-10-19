"use client";
import React from "react";
import Component from "./component";
import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import Image from "next/image";

const AdminPage = () => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);


  {/* Functions for Delete Modal*/}

  const showDeleteModal = () => {
    setdeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setdeleteModalOpen(false);
  };

  const deleteData = () => {
    setdeleteModalOpen(false);
  };



  {/* Functions for Update Modal */}

  const showUpdateModal = () => {
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const updateData = () => {
    setUpdateModalOpen(false);
  };
  const columns = [
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
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
      render: () => (
        <div className="flex gap-3">
          <Button
            className="bg-red-600 text-white"
            type="default"
            // disabled={record?.status === "CANCELLED"}
            disabled={true}
          >
            Delete
          </Button>

          <Button
            className="bg-green-400 text-white"
            type="default"
            onClick={showUpdateModal}
            // disabled={record?.status === "CANCELLED"}
            disabled={true}
          >
            Update
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Component dataColumns={columns} />

      <Modal
        open={updateModalOpen}
        title="Add Shapes Data"
        onOk={showUpdateModal}
        onCancel={closeUpdateModal}
        footer={[
          <Button key="back" onClick={closeUpdateModal}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={updateData}>
            Update Data
          </Button>,
        ]}
      >
        <Form
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Shape" name="shape" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Color" name="color" rules={[{ required: true }]}>
              <Input />
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
            onClick={deleteData}
          >
            Delete
          </Button>,
        ]}
      >
        <div className="flex flex-col space-y-5">
        
            <Image src = {"/checkmark"} alt = "Confirm Sign"
            height={40} width={40}/>
            <p className="font-bold text-lg text-red-600">Confirm Delete</p>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPage;
