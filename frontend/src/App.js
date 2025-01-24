import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Router from './Router';
import { useUserContext } from './contexts/userStore';

function App() {
  const { setTimes, times } = useUserContext();

  useEffect(() => {
    getTrackedTimes();
  }, [])

  async function getTrackedTimes() {
    const trackedTimes = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/tracked-times`);
    // console.log(trackedTimes)
    setTimes(trackedTimes.data)
  }



  // console.log(times)


  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
