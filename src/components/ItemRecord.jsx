import React from 'react';
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

function CardItem({ onShowDetails }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Tag ID
        </Typography>
        <Typography variant="h5" component="div">
          555555555
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onShowDetails}>Show Details</Button>
      </CardActions>
    </Card>
  );
}

const exampleData = {
  id: '555555555',
  name: 'Tony',
  description: 'Software Engineer',
  status: 'available',
  owner: '',
  cert: 'none'
};

function TagRecord() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpand = () => setExpanded(!expanded);
  const handleAccordionChange = (event) => setExpanded(event.target.value);

  return (
    <Box>
      <Accordion 
        expanded={expanded} 
        onChange={handleAccordionChange}
      >
        <CardItem onShowDetails={handleExpand} />
        <AccordionDetails>
            {
                Object.entries(exampleData).map(([key, value]) => {
                    if (key === 'id') {
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