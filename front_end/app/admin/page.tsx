"use client"
import React from 'react'
import Component from './component'
import { Button } from 'antd'

const AdminPage = () => {
    const columns = [
        {
          title: 'Timestamp',
          dataIndex: 'timestamp',
          key: 'timestamp',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Shape',
          dataIndex: 'shape',
          key: 'shape',
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
          },
        {
            title: "Actions",
            dataIndex: "id",
            key: "actions",
            align: "center",
            render: () => (
                <div className='flex gap-3'>
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
                        
                        // disabled={record?.status === "CANCELLED"}
                        disabled={true}
                    >
                        Update
                    </Button>
            
                </div>
            )
        }
      ];
  return (

    
    <div>
      <Component
      dataColumns = {columns}
      />
    </div>
  )
}

export default AdminPage
