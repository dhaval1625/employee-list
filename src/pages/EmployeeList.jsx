import React from 'react';
import AppLayout from '../components/ui/AppLayout';
import AppFooter from '../components/layouts/AppFooter';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { TITLE_ENUM } from '../config';
import Container from '../components/ui/Container';

function EmployeeList() {
   const employeeList = useSelector((state) => state.employee.list);

   const columns = Object.keys(TITLE_ENUM).map((keyName) => {
      return {
         name: TITLE_ENUM[keyName],
         selector: (row) => row[keyName],
      };
   });

   return (
      <AppLayout>
         <Container>
            <DataTable
               pagination
               data={employeeList}
               columns={columns}
            />
         </Container>
         <AppFooter />
      </AppLayout>
   );
}

export default EmployeeList;
