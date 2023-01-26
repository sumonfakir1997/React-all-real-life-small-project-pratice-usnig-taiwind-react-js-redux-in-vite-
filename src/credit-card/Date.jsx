import DatePicker from 'react-date-picker';
import { useState } from 'react';
import 'react-date-picker/dist/DatePicker.css'

const Date = () => {
  const [selectedDate, setSeletedDate] = useState(null);
    return(
    <div className='mt-8 bg-slate-500'>
      <h2 className='text-2xl font-bold text-white mb-3'>Date Picker</h2>
      <DatePicker 
      selected={selectedDate}
      onChange= {date =>setSeletedDate(date)}
    
      className="bg-white p-3 m-4 text-black"
       />
    </div>
    )
}
export default Date;