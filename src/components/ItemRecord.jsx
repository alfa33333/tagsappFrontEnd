import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardItem({ itemData }) {
  const handleValueClick = (value) => {
    console.log(value);
  };

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
                <Typography
                  gutterBottom
                  sx={{ cursor: "pointer", color: "primary.main" }}
                  onClick={() => handleValueClick(value)}
                >
                  {value}
                </Typography>
              </React.Fragment>
            );
          }
        })}
      </CardContent>
    </Card>
  );
}

function TagRecord({ itemData }) {
  return (
    <Box>
      <CardItem itemData={itemData} />
    </Box>
  );
}

export default TagRecord;
