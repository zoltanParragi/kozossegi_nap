// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css'

function App() {

  return (
    <>
      <header>
        <div id="header-wrapper">
          <h1>Közösségi nap Vorhotán</h1>
          <h2>Mert együtt lenni jó!</h2>
          <h3>a zalaegerszegi keresztény gyülekezet szervezésében</h3>
        </div>
      </header>
      <main>
        <section id="greeting">
          <div id="greeting-wrapper">
            <h2>Kedves Testvérek, Barátok, Ismerősök!</h2>
            <h3>Szeretettel várunk benneteket a szokásosan megrendezésre kerülő közösségi napra!</h3>
            <a href="#details">
              <div id="details-box">
                <h4>Részletek</h4>
                <FontAwesomeIcon icon="fa-solid fa-arrow-down" size="xl" />
              </div>
            </a>
          </div>
        </section>

        <section id="details">
          <div id="details-wrapper">
            <div className='details-item'>
              <h3>Ami biztosan lesz</h3>
              <ul>
                <li><FontAwesomeIcon icon="fa-solid fa-spoon" size="xl" style={{ color: "#96031A" }} /> <span>bográcsozás</span></li>
                <li><FontAwesomeIcon icon="fa-solid fa-database" size="xl" style={{ color: "#96031A" }} /> <span>kürtöskalács</span></li>
                <li><FontAwesomeIcon icon="fa-solid fa-comments" size="xl" style={{ color: "#96031A" }} /> <span>beszélgetés</span></li>
                <li><FontAwesomeIcon icon="fa-solid fa-music" size="xl" style={{ color: "#96031A" }} /> <span>dicséretek</span></li>
                <li><FontAwesomeIcon icon="fa-solid fa-futbol" size="xl" style={{ color: "#96031A" }} /> <span>foci, tollas, ping-pong, ...</span></li>
              </ul>
            </div>
            <div className='details-item'>
              <h3>Amit hozz magaddal</h3>
              <ul>
                <li><FontAwesomeIcon icon="fa-solid fa-cake-candles" size="xl" style={{ color: "#96031A" }} /> <span>egy tálca süti</span></li>
              </ul>
              <h3 id="you-can-bring">És amit még hozhatsz</h3>
              <ul>
                <li><FontAwesomeIcon icon="fa-solid fa-volleyball" size="xl" style={{ color: "#96031A" }} /> <span>sport eszköz</span></li>
              </ul>
            </div>
            <div className='details-item time-place'>
              <div>
                <h3>Időpont:</h3>
                <p>2023. június 10. (szombat) XX óra ...</p>
              </div>
              <div>
                <h3>Helyszín:</h3>
                <p>Zalaegerszeg, Vorhota ....</p>
                <p>Térkép: ...</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Azonképen sokan egy test vagyunk a Krisztusban, egyenként pedig egymásnak tagjai.</p>
        <p>Róm 12:5</p>
      </footer>

    </>
  )
}

export default App

library.add(fab, fas, far)
