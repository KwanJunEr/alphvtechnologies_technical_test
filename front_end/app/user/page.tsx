"use client";
import React, { useState } from 'react'
import Component from './component'
import { apiClient } from '../api/auth/repository';
import { message } from 'antd';
import Image from 'next/image';

const UserPage = () => {

      const [tableData, setTableData] = useState([]);
      const [loading, setLoading] = useState(false);
      
      const fetchData = async ()=>{
        try{
          setLoading(true);
          const response = await apiClient.get("/adminshapedetails");
          setTableData(response.data);
          console.log(response.data);
          setLoading(false);
        }catch(error){
          setLoading(false);
          message.error("Failed to load data");
          console.log("The error: ", error);
        }
      }

      const renderShapeColor = (shape:any, color:any) =>{
        const imagePath =  `/${shape}_${color}.png`;
        return(
          <Image
          src = {imagePath}
          alt={`${shape} ${color}`}
          width={30}
          height={20}/>
        )
      }
      
      const columns = [
        {
          title: 'Timestamp',
          dataIndex: 'created_at',
          key: 'created_at',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Shapecolor',
          dataIndex: 'shapecolor',
          key: 'shapecolor',
          render: (text : any, record : any) => renderShapeColor(record.shape, record.color)
        },
      ];
      
  return (
    <div>
      <Component
      datacolumns = {columns}
      tableData = {tableData}
      loading = {loading}
      fetchData = {fetchData}
      />
    </div>
  )
}

export default UserPage
