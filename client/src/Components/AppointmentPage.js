import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button,  TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AppointmentPage() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [problem, setProblem] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  
  
  useEffect(() => {
    axios.get('/api/doctors')
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);





  const handleBookAppointment = async(e) => {
    e.preventDefault();
    const appointmentData = {
     
      selectedDoctor,
      patientName,
      mobileNumber,
      problem,
      scheduledTime,
    };
    console.log(appointmentData);
    axios.post('/api/appointments', appointmentData)
    .then(res => {
      console.log(res);
      console.log('Appointment booked!'); 
      alert('Booked Successfully');
      navigate(`/user`);
      // redirect or show confirmation message
    })
    .catch(err => {
      console.log(err); 
      // show error message
    })
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleBookAppointment}>
        

        {/* Additional fields for patient details */}
        <TextField
          label="Patient Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <TextField
          label="Problem"
          variant="outlined"
          fullWidth
          margin="normal"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />
         <label>Select a Doctor:</label>
        <select  onChange={(e) => setSelectedDoctor(e.target.value)}  value={selectedDoctor}>
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.doctorName} value={doctor.doctorName}>
              {doctor.doctorName}
            </option>
          ))}
        </select>

        <TextField
          label="Preferred time"
          variant="outlined"
          fullWidth
          margin="normal"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
        />


       <Button type="submit" variant="contained" color="primary">
          Book Appointment
        </Button>
    
      </form>
    </div>
  );
}

export default AppointmentPage;
