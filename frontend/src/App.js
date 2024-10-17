import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Router from './Router';

function App() {

  useEffect(() => {
    // getLoggedTimes();
    // getTimeCommitments();
    getTrackedTimes();
  }, [])

  // async function getLoggedTimes() {
  //   const times = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/logged`);
  //   console.log(times)
  // }

  // async function getTimeCommitments() {
  //   const commitments = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/commitments`);
  //   console.log(commitments)
  // }

  async function getTrackedTimes() {
    const trackedTimes = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/tracked-times`);
    console.log(trackedTimes)
  }

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
