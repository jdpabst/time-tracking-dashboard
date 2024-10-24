import { useUserContext } from 'src/contexts/userStore';
import './Commitments.scss';

interface CommitmentsProps {
 timeFrame: 'daily' | 'weekly' | 'monthly'; // Define the allowed values for timeFrame
}

export default function Commitments(timeFrame) {
 const { times } = useUserContext();



 return (
  <div className='commitments-container'>
   {times.map((item, id) => (
    <div key={id} className={`${item.title === 'Self Care' ? `self-care` : item.title.toLowerCase()} commitment`}>
     <img className='icon' src={`/assets/images/icon-${item.title === 'Self Care' ? `self-care` : item.title.toLowerCase()}.svg`} />
     <div className='content'>
      <div className='heading'>
       <h2>{item.title}</h2>
       <img src='/assets/images/icon-ellipsis.svg' />
      </div>
      {timeFrame.timeFrame === 'daily' ?
       <div className='times'>
        <h1>{item.timeframes.daily.current} hrs</h1>
        <h3>Yesterday {item.timeframes.daily.previous}</h3>
       </div>
       : timeFrame.timeFrame === 'weekly' ?
        <div className='times'>
         <h1>{item.timeframes.weekly.current} hrs</h1>
         <h3>Last Week {item.timeframes.weekly.previous}</h3>
        </div>
        : timeFrame.timeFrame === 'monthly' ?
         <div className='times'>
          <h1>{item.timeframes.monthly.current} hrs</h1>
          <h3>Last Month {item.timeframes.monthly.previous}</h3>
         </div>
         :
         <div className='times'>
          <h1> {item.timeframes.daily.current} hrs</h1>
          <h3>Yesterday {item.timeframes.daily.previous}</h3>
         </div>}

     </div>
    </div>
   ))}
   {/* <div className='work commitment'>
    <img className='icon' src='/assets/images/icon-work.svg' />
    <div className='content'>
     <div className='heading'>
      <h2>Work</h2>
      <img src='/assets/images/icon-ellipsis.svg' />
     </div>
     <div className='times'>
      <h1>hrs</h1>
      <h3>Last</h3>
     </div>
    </div>
   </div>
   <div className='play commitment'>
    <img className='icon' src='/assets/images/icon-play.svg' />
    <div className='content'>
     <div className='heading'>
      <h2>Play</h2>
      <img src='/assets/images/icon-ellipsis.svg' />
     </div>
     <div className='times'>
      <h1>hrs</h1>
      <h3>Last</h3>
     </div>
    </div>
   </div>
   <div className='study commitment'>
    <img className='icon' src='/assets/images/icon-study.svg' />
    <div className='content'>
     <div className='heading'>
      <h2>Study</h2>
      <img src='/assets/images/icon-ellipsis.svg' />
     </div>
     <div className='times'>
      <h1>hrs</h1>
      <h3>Last</h3>
     </div>
    </div>
   </div>
   <div className='exercise commitment'>
    <img className='icon' src='/assets/images/icon-exercise.svg' />
    <div className='content'>
     <div className='heading'>
      <h2>Exercise</h2>
      <img src='/assets/images/icon-ellipsis.svg' />
     </div>
     <div className='times'>
      <h1>hrs</h1>
      <h3>Last</h3>
     </div>
    </div>
   </div>
   <div className='social commitment'>
    <img className='icon' src='/assets/images/icon-social.svg' />
    <div className='content'>
     <div className='heading'>
      <h2>Social</h2>
      <img src='/assets/images/icon-ellipsis.svg' />
     </div>
     <div className='times'>
      <h1>hrs</h1>
      <h3>Last</h3>
     </div>
    </div>
   </div>
   <div className='self-care commitment'>
    <img className='icon' src='/assets/images/icon-self-care.svg' />
    <div className='content'>
     <div className='heading'>
      <h2>Self Care</h2>
      <img src='/assets/images/icon-ellipsis.svg' />
     </div>
     <div className='times'>
      <h1>hrs</h1>
      <h3>Last</h3>
     </div>
    </div>
   </div> */}
  </div>
 )
}