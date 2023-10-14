import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';

// Sample doctor data (replace this with actual API call)
const doctors = [
  { id: 1, name: "Dr.Ravi Teja", category: "Cardiologist" },
  { id: 2, name: "Dr. Ganesh Balaji", category: "Pediatrician" },
  // Add more doctors and their information
];

const ViewDoctorsPage = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    // Fetch doctor data from the API and set it in the state
    setDoctorData(doctors); // Replace with your API call
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        View Doctors
      </Typography>
      {doctorData.map((doctor) => (
        <Card key={doctor.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography>{doctor.category}</Typography>
              </Grid>
              <Grid item xs={4}>
                {/* Add a button or link for viewing doctor details */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ViewDoctorsPage;
