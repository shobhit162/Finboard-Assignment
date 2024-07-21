import { useState } from 'react';
import {
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Grid,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

const App = () => {
  const [reportType, setReportType] = useState('');
  const [accountingMethod, setAccountingMethod] = useState('');
  const [reportPeriod, setReportPeriod] = useState([null, null]);
  const [summarizeBy, setSummarizeBy] = useState('');
  const [error, setError] = useState('');

  const handleChangeForReportType = (event) => {
    setReportType(event.target.value);
  };

  const handleChangeForAccountingMethod = (event) => {
    setAccountingMethod(event.target.value);
  };

  const handleSubmit = () => {
    try {
      google.script.run
        .withSuccessHandler(() => {
          // not implemented
        })
        .withFailureHandler((error) => {
          setError(error.message);
        })
        .generateReport(
          reportType,
          accountingMethod,
          reportPeriod,
          summarizeBy
        ); // not implemented
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div style={{ padding: '3px', overflowX: 'hidden' }}>
      <Typography variant="h4" gutterBottom>
        FinBoard AI Report Generator
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ marginBottom: '30px' }}>
        This is an assignment of FinBoard AI for report generation. Choose your
        options below for the type of report you want to generate.
      </Typography>

      <FormControl fullWidth>
        <InputLabel>Report Type</InputLabel>
        <Select
          value={reportType}
          label="Report Type"
          onChange={handleChangeForReportType}
        >
          <MenuItem value="type1">Profit and Loss</MenuItem>
          <MenuItem value="type2">Sheet 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: '30px' }}>
        <InputLabel>Accounting Method</InputLabel>
        <Select
          value={accountingMethod}
          label="Accounting Method"
          onChange={handleChangeForAccountingMethod}
        >
          <MenuItem value="accrual">Accrual</MenuItem>
          <MenuItem value="cash">Cash</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl fullWidth margin="normal" sx={{ marginTop: '30px' }}>
          <DateRangePicker
            localeText={{ start: 'Start-date', end: 'End-date' }}
            value={reportPeriod}
            onChange={(newValue) => setReportPeriod(newValue)}
            slotProps={{ fieldSeparator: { children: 'to' } }}
            sx={{
              [`.${pickersLayoutClasses.contentWrapper}`]: {
                alignItems: 'center',
              },
            }}
          />
        </FormControl>
      </LocalizationProvider>

      <FormControl fullWidth margin="normal" sx={{ marginTop: '30px' }}>
        <InputLabel>Summarize By</InputLabel>
        <Select
          value={summarizeBy}
          label="Summarize By"
          onChange={(e) => setSummarizeBy(e.target.value)}
        >
          <MenuItem value="day">Day</MenuItem>
          <MenuItem value="month">Month</MenuItem>
          <MenuItem value="year">Year</MenuItem>
        </Select>
      </FormControl>

      <Grid container justifyContent={'center'}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: '35px' }}
          startIcon={<NoteAddIcon />}
        >
          Generate Report
        </Button>
      </Grid>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
      >
        <Alert onClose={() => setError('')} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default App;
