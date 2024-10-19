import React from 'react'
import Component from './component'

const UserPage = () => {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
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
          title: 'Shapecolor',
          dataIndex: 'shapecolor',
          key: 'shapecolor',
        },
      ];
      
  return (
    <div>
      <Component
      datacolumns = {columns}
      />
    </div>
  )
}

export default UserPage
