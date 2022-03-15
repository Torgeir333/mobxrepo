import React, { useState } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// Denne komponenten er satt opp med MobX state
// fra https://mobx.js.org/README.html
// TimerDisplay blir eksportert som funksjonell 
// komponent (og her brukt av App.js), og returnerer
// en TimerView komponent

// den demonstrer instanser av Timer klasse, som 
// teller sekunder, drevet av SetInterval()

// en <TimerView> komponent kan også restarte
// tidsmåleren, og kan lese tidsmåleren...

// Poenget med MobX er at <TimerView> avhengighet av
// Timer-instansen blir sett av MobX og trigger
// ny rendering av <TimerView> om myTimer endres eksternt

// Det som er forvirrende i forhold til Redux er at det
// er ingen sentral Store her... akkurat i dette eksempelet
// synes MobX å fungere som internal State i en vanlig React
// app... tror jeg da

const TimerDisplay = () => {

    const [value, setValue] = useState(''); 
    // internal state ikke brukt akkurat nå...

    // Klasse med constructor() for MobX
    class Timer {
        secondsPassed = 0;
        secondsSinceStart = 0;

        constructor() {
            makeAutoObservable(this);
            // instanser av denne klassen,
            // som myTimer under her
            // blir satt under observasjon av MobX
            // setInterval() kjører myTimer.increase()
            // hvert tusende millisekund
        }

        increase() {
            this.secondsPassed += 1;
            this.secondsSinceStart +=1;
        }

        reset() {
            this.secondsPassed = 0
        }
    }

    // Initierer en instans av Timer-klassen
    const myTimer = new Timer();

    // TimerView er en komponent som brukes i render/retur:
    // merk at den tar en timer-instans som input/parameter

    // da kan TimerView kan bruke Timer metoder: 
    // onclick --> aktiverer timer.reset()
    // og lese indre tilstand i timer-instansen

    // siden Mobx observer er pakket/wrappet rundt 
    // TimerView-komponenten, så blir interne avhengigheter,
    // her en oppdatering av timer, oppdaget, og
    // trigger en oppdatering av TimerView komponent... 
    const TimerView = observer( ({ timer }) => (
      <div>
        <p>TimerView komponent:</p>
        <button onClick={ () => timer.reset()}>
          Sekunder siden sist start: {timer.secondsPassed}
        </button>
        <p>Siden app start: {timer.secondsSinceStart}</p>
      </div>
        
    ))

    // Endelig årsak til sekund-telling: 
    // setInterval kjøres her hvert 1000 ms
    setInterval( () => {
        myTimer.increase()
    }, 1000);

    return (
        <div >

          <p>Tidsmåler kan restartes med klikk</p>
          <TimerView timer={myTimer} />
          <br></br>
          <br></br>
        </div>
    );
  }

  export default TimerDisplay;