import React from "react";
import Box from '@mui/material/Box';
import TagRecord from './ItemRecord.jsx';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";


const baseApiUrl = "https://localhost:5001";

function getExampleItem(setItemData, setLoading, setError) {
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
        setError(false);
      }
    })
    .catch((error) => {
      console.error("Error fetching data");
      setItemData({}); // Set to empty object on error
      setError(true);
    })
    .finally(() => {
      setTimeout(() => {
    setLoading(false);
  }, 1000); 
    });
}



function ActionBody() {
    const [itemData, setItemData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
        getExampleItem(setItemData, setLoading, setError);
    }, []);

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                    <CircularProgress />
                </Box>
            ) : error ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <Typography color="error" variant="h6">Error occurred while fetching data</Typography>
        </Box>
      ) : (
                <TagRecord itemData={itemData} />
            )}
        </Container>
    );
}
export default ActionBody;  