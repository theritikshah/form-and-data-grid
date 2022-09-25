import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button, Stack } from '@chakra-ui/react'


const Data = () => {

    interface ContactDetails{
        FirstName:String;
        LastName: String;
        Email: String;
        Phone: Number;
        PhoneOptional: Number;
        Gender: String;
        File: any;

    }

    const rowData: ContactDetails[] = [
         {
            FirstName: "Ritik",
            LastName:"Jain",
            Email: "ritikraw@gmail.com",
            Phone: 8839992717,
            PhoneOptional: 8839992717,
            Gender: "Male",
            File: ''

        }
    ];
    const columnDefs = [
        {field: 'FirstName'},
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
        <h1>Hello Ritik</h1>
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
    </div>
    </div>
  )
}

export default Data