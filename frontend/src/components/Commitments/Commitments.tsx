import axios from 'axios';
import { useState } from 'react';
import { useUserContext } from 'src/contexts/userStore';
import './Commitments.scss';

interface CommitmentsProps {
    timeFrame: 'daily' | 'weekly' | 'monthly'; // Define the allowed values for timeFrame
}

export default function Commitments(timeFrame) {
    const { times, setTimes } = useUserContext();
    const [toggleAddTime, setToggleAddTime] = useState<Record<number, boolean>>({});
    const [hours, setHours] = useState(0);

    function toggle(id: number) {
        setToggleAddTime((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the state for the specific id
        }));
    }

    async function addLoggedTime(hours, timeCommitmentsId) {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/logged`, {
                createdAt: new Date().toISOString(),
                hours: hours,
                timeCommitmentsId: timeCommitmentsId
            })

            const trackedTimes = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/tracked-times`);

            setTimes(trackedTimes.data)



        } catch (error) {

            console.error('Error adding logged time:', error);
        }

    }


    console.log(hours)
    console.log(times)
    return (
        <div className='commitments-container'>
            {times.map((item, index) => {

                return <div key={index} className={`${item.title === 'Self Care' ? `self-care` : item.title?.toLowerCase()} commitment`}>
                    <img className='icon' src={`/assets/images/icon-${item.title === 'Self Care' ? `self-care` : item.title?.toLowerCase()}.svg`} />
                    <div className='content'>
                        <div className='heading'>
                            <h2>{item.title}</h2>
                            <img src='/assets/images/icon-ellipsis.svg' onClick={() => toggle(index)} />
                        </div>
                        {timeFrame.timeFrame == 'daily' ?
                            <div className='times'>
                                {!toggleAddTime[index] ?
                                    <div className='logged-times-view'>
                                        <h1>{item.timeframes.daily.current}hrs</h1>
                                        <h3>Yesterday - {item.timeframes.daily.previous}hrs</h3>
                                    </div>
                                    :
                                    <div className="add-time-container">
                                        <input
                                            name='hours'
                                            onChange={e => setHours(Number(e.target.value))}
                                            className='add-time-input'
                                            placeholder="0"
                                        />
                                        <h1>hrs</h1>
                                        <button onClick={() => addLoggedTime(hours, item.id)}>add time</button>
                                    </div>
                                }

                            </div>
                            : timeFrame.timeFrame === 'weekly' ?
                                <div className='times'>
                                    {!toggleAddTime[index] ?
                                        <div className='logged-times-view'>
                                            <h1>{item.timeframes.daily.current}hrs</h1>
                                            <h3>Last Week - {item.timeframes.daily.previous}hrs</h3>
                                        </div>
                                        :
                                        <div className="add-time-container">
                                            <input className='add-time-input' placeholder="0" />
                                            <h1>hrs</h1>
                                        </div>
                                    }
                                </div>
                                : timeFrame.timeFrame === 'monthly' ?
                                    <div className='times'>
                                        {!toggleAddTime[index] ?
                                            <div className='logged-times-view'>
                                                <h1>{item.timeframes.daily.current}hrs</h1>
                                                <h3>Last Month - {item.timeframes.daily.previous}hrs</h3>
                                            </div>
                                            :
                                            <div className="add-time-container">
                                                <input className='add-time-input' placeholder="0" />
                                                <h1>hrs</h1>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <div className='times'>
                                        <h1> {item.timeframes.daily.current}hrs</h1>
                                        <h3>Yesterday - {item.timeframes.daily.previous}hrs</h3>
                                    </div>}

                    </div>
                </div>
            })}
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