import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Router from './Router';
import { useUserContext } from './contexts/userStore';

function App() {
  const { setTimes, times } = useUserContext();
  // const { loggedTime, setLoggedTime } = useUserContext();

  useEffect(() => {
    getTrackedTimes();
    // addLoggedTime();
  }, [])

  async function getTrackedTimes() {
    const trackedTimes = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/tracked-times`);
    // console.log(trackedTimes)
    setTimes(trackedTimes.data)
  }

  // console.log(times)

  // async function addLoggedTime(hours, timeCommitmentsId) {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/logged`, {
  //       createdAt: new Date().toISOString(),
  //       hours: hours,
  //       timeCommitmentsId: timeCommitmentsId
  //     })

  //     console.log('Logged time added:', response.data);

  //   } catch (error) {

  //     console.error('Error adding logged time:', error);
  //   }

  // }


  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
