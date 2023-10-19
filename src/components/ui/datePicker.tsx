import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';

registerLocale('en-US', enUS); // Set locale to en-US

type DatePickerProps = {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
};

const DatePickerComp: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
    return (
        <div className="iso8601-date-picker">
            <DatePicker
                selected={selectedDate}
                onChange={onDateChange}
                locale="en-US" // Set locale
                dateFormat="yyyy-MM-dd'T'HH:mm:ss.SSSxxx" // ISO8601 format
                showTimeInput
                timeInputLabel="Time:"
                timeFormat="HH:mm:ss"
                timeIntervals={1}
                timeCaption="Time"
                withPortal
            />
        </div>
    );
};

export default DatePickerComp;
