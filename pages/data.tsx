import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button, Stack } from '@chakra-ui/react'
import {formData} from '../components/ChakraForm'


const Data = () => {
console.log("consoling from data page: "+ [...formData])
    const columnDefs = [
        {field: 'Name'},
        {field: 'LastName'},
        {field: 'Email'},
        {field: 'Age'},
        {field: 'Phone'},
        {field: 'PhoneOptional'},
        {field: 'Gender'},
        {field: 'File'},
    ];
    
  return (
    <div>
        {/* <h1>Hello Ritik</h1>
        <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Button colorScheme='teal' variant='outline'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='link'>
    Button
  </Button>
</Stack>
        <div className='ag-theme-alpine' style={{height: 200, width: '100%'}}>
        <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        />
    </div> */}
    </div>
  )
}

export default Data