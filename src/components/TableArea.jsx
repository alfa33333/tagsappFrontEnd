import * as React from 'react';
import BasicTable from './Tables';



export function RetailersTable({ retailersData }) {
  const rowstoDisplay = retailersData.slice(0, 5); // Show only first 5 rows
  const columns =  ['Name', 'Identifier', 'Email','Accredited'];
  for(let i = 0; i < rowstoDisplay.length; i++) {
        rowstoDisplay[i].accredited = rowstoDisplay[i].accredited ? "Yes" : "No"; 
      }
      console.log(rowstoDisplay);


  return (
    <BasicTable columns={columns} rowstoDisplay={rowstoDisplay} />
  );
}


export function EventsTable({ eventsData }) {
  const columns =  ['event_type', 'created_at'];
  console.log("EventstoDisplay:", eventsData);
  const eventstoDisplay = eventsData.events ? eventsData.events : [];
  return (
    <BasicTable columns={columns} rowstoDisplay={eventstoDisplay} />

  );
}

  
export default RetailersTable;

