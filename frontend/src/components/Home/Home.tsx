import './Home.scss'

export default function Home() {
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
      <p>Daily</p>
      <p>Weekly</p>
      <p>Monthly</p>
     </div>
    </div>
    <div className='commitments-container'>
     <div className='work commitment'>
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
        <h2>Work</h2>
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
        <h2>Work</h2>
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
        <h2>Work</h2>
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
        <h2>Work</h2>
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
        <h2>Work</h2>
        <img src='/assets/images/icon-ellipsis.svg' />
       </div>
       <div className='times'>
        <h1>hrs</h1>
        <h3>Last</h3>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}