import * as React from 'react';
import BasicTable from './Tables';

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (isNaN(d)) return iso; // return original if parsing fails
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

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
  const raw = eventsData.events ? eventsData.events : [];

  const eventstoDisplay = raw.map((ev) => ({
    ...ev,
    created_at: formatDate(ev.created_at),
  }));

  return (
    <BasicTable columns={columns} rowstoDisplay={eventstoDisplay} />

  );
}

  
export default RetailersTable;

