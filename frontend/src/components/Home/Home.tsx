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
     <div className='work'></div>
     <div className='play'></div>
     <div className='study'></div>
     <div className='exercise'></div>
     <div className='social'></div>
     <div className='self-care'></div>
    </div>
   </div>
  </div>
 )
}