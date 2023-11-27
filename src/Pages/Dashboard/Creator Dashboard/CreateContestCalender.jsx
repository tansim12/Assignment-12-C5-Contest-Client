import  { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Make sure to import the styles
import 'react-date-range/dist/theme/default.css'; // Optional theme import

const MyDateRangeComponent = ({setDateValue , dateValue}) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setDateValue([ranges.selection])
  };
// console.log(dateRange);
  return (
    <div>
      <DateRange
        ranges={dateRange}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        editableDateInputs={true}
        dragSelectionEnabled={true}
        minDate={new Date()}
       
        
      />
      {/* Display selected range */}
      <div>
        <p>Selected Range:</p>
        <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
        <p>End Date: {dateRange[0].endDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default MyDateRangeComponent;
