import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function CardItem({ tagID, onShowDetails }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Tag ID
        </Typography>
        <Typography variant="h5" component="div">
          {tagID}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onShowDetails}>Show Details</Button>
      </CardActions>
    </Card>
  );
}

const baseApiUrl = "https://localhost:5001";

async function getExampleItem(setItemData) {
  fetch(baseApiUrl + `/api/items/04:55:70:D2:22:6D:80`)
    .then((response) => {
      if (response.status === 404) {
        console.log('No data found');
        return null; // Handle 404 case
      }
      return response.json();
    })
    .then((data) => {
      // Process the data as needed
        if (data) {
        setItemData(data);
        // console.log('Fetched data:', data);
      }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        setItemData({}); // Set to empty object on error
    });
}

// const exampleData = {
//   id: '555555555',
//   name: 'Tony',
//   description: 'Software Engineer',
//   status: 'available',
//   owner: '',
//   cert: 'none'
// };

function TagRecord() {
  const [expanded, setExpanded] = React.useState(false);
  const [itemData, setItemData] = React.useState({});

  React.useEffect(() => {
    getExampleItem(setItemData);
  }, []);

  const handleExpand = () => setExpanded(!expanded);
  const handleAccordionChange = (event) => setExpanded(event.target.value);

  return (
    <Box>
      <Accordion 
        expanded={expanded} 
        onChange={handleAccordionChange}
      >
        <CardItem tagID={itemData.rfid_tag} onShowDetails={handleExpand} />
        <AccordionDetails>
            {
                Object.entries(itemData).map(([key, value]) => {
                    if (key === 'id' || key === 'rfid_tag') {
                        return null; // Skip rendering the 'id' field
                    } else {return (
                    <React.Fragment key={key}>
                        <Typography variant="h6" gutterBottom>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Typography>
                        <Typography gutterBottom>
                            {value}
                        </Typography>
                    </React.Fragment>
                    )}
                })
            }
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}


export default TagRecord;