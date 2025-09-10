import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardItem({ itemData }) {
  const [selectedKey, setSelectedKey] = React.useState(null);
  const valueRefs = React.useRef({});

  const handleValueClick = (key, value) => {
    setSelectedKey(key);
    console.log(`Property clicked: ${key}=${value}`);
  };

    React.useEffect(() => {
    function handleDocumentClick(e) {
      // Check if any of the value refs contain the clicked target
      const clickedOnValue = Object.values(valueRefs.current).some(
        (ref) => ref && ref.contains(e.target)
      );
      if (!clickedOnValue) {
        setSelectedKey(null);
      }
    }
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

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
                  ref={el => (valueRefs.current[key] = el)}
                  sx={{
                    cursor: "pointer",
                    color: selectedKey === key ? "secondary.main" : "primary.main",
                    bgcolor: selectedKey === key ? "secondary.light" : "transparent",
                    borderRadius: 1,
                    px: 1,
                    transition: "background 0.2s"
                  }}
                  onClick={() => handleValueClick(key, value)}
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
