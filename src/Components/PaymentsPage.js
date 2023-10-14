import React, { useState } from 'react';
import { Box } from '@mui/material';
import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

function PaymentPage() {
  const [consultationFee, setConsultationFee] = useState(0);
  const [scanningCost, setScanningCost] = useState(0);
  const [pharmacyFee, setPharmacyFee] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCalculateTotal = () => {
    const total = parseFloat(consultationFee) + parseFloat(scanningCost) + parseFloat(pharmacyFee);
    setTotalAmount(total);
  };

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Payment details:', {
      consultationFee,
      scanningCost,
      pharmacyFee,
      selectedPaymentMethod,
      totalAmount,
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Payment Information
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Consultation Fee
          </Typography>
          <TextField
            label="Consultation Fee"
            variant="outlined"
            fullWidth
            value={consultationFee}
            onChange={(e) => setConsultationFee(e.target.value)}
          />

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Scanning & Reports Cost
          </Typography>
          <TextField
            label="Scanning Cost"
            variant="outlined"
            fullWidth
            value={scanningCost}
            onChange={(e) => setScanningCost(e.target.value)}
          />

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Pharmacy Fee
          </Typography>
          <TextField
            label="Pharmacy Fee"
            variant="outlined"
            fullWidth
            value={pharmacyFee}
            onChange={(e) => setPharmacyFee(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal}
            style={{ marginTop: '20px' }}
          >
            Total
          </Button>
          <Container>
    <Typography variant="h3" gutterBottom>
    </Typography>
    <Card>
      <CardContent>
        {/* ... (previous code) */}

        <Box
          border={1} // You can adjust border styles
          borderColor="primary.main" // You can choose your own color
          p={2} // Padding
          mt={2} // Margin-top
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" gutterBottom >
            Amount to be Paid: ₹ {totalAmount} /-
          </Typography>
        </Box>

        {/* ... (remaining code) */}
      </CardContent>
    </Card>
  </Container>



          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Select Payment Method
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
              <MenuItem value="card">Credit/Debit Card</MenuItem>
              <MenuItem value="upi">UPI Payment</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            style={{ marginTop: '20px' }}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PaymentPage;
