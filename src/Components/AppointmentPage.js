import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Typography, TextField } from '@mui/material';

function AppointmentPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');

  // Additional states for patient details
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

  const handleDoctorChange = (event) => {
    const doctorId = event.target.value;
    setSelectedDoctor(doctorId);

    // Fetch available slots for the selected doctor
    axios.get(`/api/doctors/${doctorId}/available-slots`)
      .then((response) => {
        setAvailableSlots(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleBookAppointment = () => {
    // Implement logic to book the selected slot and capture patient details
    // You would need to make a POST request to your API to create an appointment
    const appointmentData = {
      doctorId: selectedDoctor,
      slot: selectedSlot,
      patientName,
      mobileNumber,
      problem,
      scheduledTime,
    };
    console.log('Booking appointment with data:', appointmentData);
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form>
        

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
        <select onChange={handleDoctorChange} value={selectedDoctor}>
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name}
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

        <label>Select an Available Slot:</label>
        <select onChange={handleSlotChange} value={selectedSlot}>
          <option value="">Select a slot</option>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {new Date(slot).toLocaleString()}
            </option>
          ))}
        </select>

        <Button
          variant="contained"
          color="primary"
          onClick={handleBookAppointment}
          style={{ marginTop: '20px' }}
        >
          Book Appointment
        </Button>
      </form>
    </div>
  );
}

export default AppointmentPage;
