import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import "../App.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Mar">
      <Grid container spacing={4} justifyContent="center">
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                boxShadow: 3,
                overflow: "hidden",
                height: "400px", // Set a fixed height for consistent card size
                maxWidth: "300px", // Set a maximum width for the card
                margin: "auto", // Center the card within the grid item
              }}
            >
              <img
                src={val.img_url}
                className="img-fluid"
                style={{
                  width: "100%", // Make the image take full width of the card
                  height: "200px", // Fixed height for image
                  objectFit: "cover", // Ensure the image covers the area without distortion
                }}
                alt="image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {val.EmpName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.designation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Employee ID: {val.empId}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-evenly" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  startIcon={<DeleteIcon />}
                  sx={{ backgroundColor: "#6a1b9a", color: "white", '&:hover': { backgroundColor: "#4a148c" } }}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                  sx={{ backgroundColor: "#6a1b9a", color: "white", '&:hover': { backgroundColor: "#4a148c" } }}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
