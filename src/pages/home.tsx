import React, { useState } from 'react';
import './home.scss';
import Overlay from '../components/overlay/overlay';
import Chart1 from '../components/charts/chart1';
import Chart2 from '../components/charts/chart2';
import Map from '../components/map/map';

const Home = () => {
    const [ overlayVisible, updateOverlayVisible ] = useState<boolean>(true);
    const [ submitted, updateSubmitted ] = useState<boolean>(false);

    const start = () => {
        console.log('new game started');
        updateOverlayVisible(false);
        updateSubmitted(false);
    }

    const submitGuess = () => {
        updateSubmitted(true);
    }

    return (
        <div className="home">
            <div className="home__chart chart-1">
               <Chart1 />
            </div>
            <div className="home__chart chart-2">
                <Chart2 />
            </div>
            <div className="map">
                <Map onSelect={() => null} />
            </div>

            {
                !submitted && <button className="button" onClick={() => submitGuess()}>Senden</button>
            }

            {
                !overlayVisible && submitted && <button className="button" onClick={() => start()}>Neues Spiel</button>
            }

            {
                overlayVisible && <Overlay buttonText="Start" emitClick={() => start()} />
            }
        </div>
    )
}
export default Home;
