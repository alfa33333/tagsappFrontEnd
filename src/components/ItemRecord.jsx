import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function CardItem({ itemData }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {Object.entries(itemData).map(([key, value]) => {
          if (key === "id" || key === "rfid_tag") {
            return null; // Skip rendering the 'id' field
          } else {
            return (
              <React.Fragment key={key}>
                <Typography variant="h6" gutterBottom>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <Typography gutterBottom>{value}</Typography>
              </React.Fragment>
            );
          }
        })}
      </CardContent>
    </Card>
  );
}

const baseApiUrl = "https://localhost:5001";

function getExampleItem(setItemData) {
  fetch(baseApiUrl + `/api/items/04:55:70:D2:22:6D:80`)
    .then((response) => {
      if (response.status === 404) {
        console.log("No data found");
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
      console.error("Error fetching data:", error);
      setItemData({}); // Set to empty object on error
    });
}

function TagRecord() {
  const [itemData, setItemData] = React.useState({});

  React.useEffect(() => {
    getExampleItem(setItemData);
  }, []);

  return (
    <Box>
        <CardItem itemData={itemData} />
    </Box>
  );
}

export default TagRecord;
