import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';


const Findmatch = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='mainContainer'>
      <div className='titleContainer'>Findmatch</div>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  )
}


export default Findmatch