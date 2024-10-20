"use client"
import Header from '@/components/Header'
import React, { useEffect } from 'react'
import { message, Table } from 'antd'
import { useState } from 'react'
import { apiClient } from '../api/auth/repository'

const Component = ({datacolumns, tableData, loading, fetchData} : any) => {

  useEffect(()=>{
    fetchData();
  },);
 
  return (
    <div>
      <Header/>
      <div className='px-6 pt-4'>
        <h1 className='text-3xl font-semibold'>User Portal</h1>
    
      <div className='mt-6'>
        <h3 className='text-md font-bold'>Shapes Table Data:</h3>
        <div className='mt-3'>
              <Table
        columns={datacolumns}
        dataSource={tableData}
        bordered
        className='font-bold'
        rowKey="id"
        /> 
        </div>
     
      </div>  
    </div>
    </div>
  )
}

export default Component
