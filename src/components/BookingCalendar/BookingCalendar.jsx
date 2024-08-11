import DaySlot from "./DaySlot/DaySlot"; 
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlot from "./TimeSlot/TimeSlot";

export default function BookingCalendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySlot
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlot
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
