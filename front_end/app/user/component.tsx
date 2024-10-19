"use client"
import Header from '@/components/Header'
import React from 'react'
import { Table } from 'antd'

const Component = ({datacolumns} : any) => {
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
        bordered
        /> 
        </div>
     
      </div>  
    </div>
    </div>
  )
}

export default Component
