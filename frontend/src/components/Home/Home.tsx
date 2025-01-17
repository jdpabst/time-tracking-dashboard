import { useState } from 'react';
import Commitments from '../Commitments/Commitments';
import './Home.scss';

export default function Home() {
 const [timeFrame, setTimeFrame] = useState('daily')

 function handleTimeToggle(str) {
  setTimeFrame(str);
 }

 console.log(timeFrame)

 return (
  <div className='main-container'>
   <div className='content-container'>
    <div className='profile-container'>
     <div className='user-info'>
      <img src='/assets/images/image-jeremy.png' />
      <div className='user-name'>
       <p>Report for</p>
       {/* Something like this if I were to be pulling the user from the backend <h1>{commitments.user}</h1> */}
       <h1>Jeremy Robson</h1>
      </div>
     </div>
     <div className='time-selections'>
      <p className={timeFrame === 'daily' ? 'active' : ''} onClick={() => handleTimeToggle('daily')}>Daily</p>
      <p className={timeFrame === 'weekly' ? 'active' : ''} onClick={() => handleTimeToggle('weekly')}>Weekly</p>
      <p className={timeFrame === 'monthly' ? 'active' : ''} onClick={() => handleTimeToggle('monthly')}>Monthly</p>
     </div>
    </div>
    < Commitments timeFrame={timeFrame} />
   </div>
  </div>
 )
}