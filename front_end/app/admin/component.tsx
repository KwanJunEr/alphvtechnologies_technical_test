import AdminHeader from '@/components/Header'
import { Button, Table } from 'antd'
import React from 'react'

const Component = ({dataColumns} : any) => {
  return (
    <div>
        <AdminHeader/>
        {/* This is the header with add record and the title*/}
      <div className='px-6 '>
        <h1 className='text-2xl text-black font-semibold mt-3'>Admin Portal </h1>
        <div className='mt-5 flex justify-between w-full '>
            Add your data here 
           <Button>Add Shapes Data</Button>
        </div>   
        <div className='mt-4'>
            <p className='font-bold text-sm'>Shapes Table Data</p>
            <div className='mt-3'>
                <Table
            columns = {dataColumns}
            bordered
            />  
            </div>
          
        </div>
      </div>
      {/* The table for all of the records with update and delete button*/}
   

    </div>
  )
}

export default Component
