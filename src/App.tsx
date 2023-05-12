import React, {useState} from 'react';

import './scss/styles.scss'
import current from './assets/images/beat1.jpg'
import {data} from "./assets/data";
import {ITrack} from "./models";
import TrackList from './components/TrackList';
import useSound from 'use-sound';


function App() {


    const [tracks, setTracks] = useState<ITrack[]>([])


    const track: Array<ITrack[]> = data.map( (item) => {
        const audio = new Audio(`./assets/audio/${item.link}`)

        // @ts-ignore
        const newItem: Array<ITrack> = {...item}
        console.log(newItem)
        return newItem
    })

    const [play, { pause, duration, sound }] = useSound(data);

    const getTracks = () => {

        // @ts-ignore
        setTracks(track)

    }

    React.useEffect(() => {
        getTracks()
    }, [])

    const items = tracks.map((obj) =>
        <TrackList key={obj.id} {...obj}/>
    )


  return (
      <div className="root">
          <h1>Music Player</h1>
          <main className="app">
              <div className="content">
                  <div className="handling">
                      <div className="handling-sound" title="Volume">
                          <svg  className="icon-sound"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                              <path d="M26.5,2.1c-0.3-0.2-0.7-0.2-1,0L13.7,9H6c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h7.7l11.8,6.9C25.7,30,25.8,30,26,30  c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.9V3C27,2.6,26.8,2.3,26.5,2.1z"></path>
                          </svg>
                          <div className="volume">
                              <input
                                  min="0"
                                  max="1"
                                  step="0.1"
                                  type="range"
                                  name="volume"
                                  value="0.5"
                                  className="controls-volume"
                              />
                          </div>
                      </div>

                      <div className="handling-repeat" title="Repeat">
                          <svg className="icon-repeat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="repeat">
                              <path d="M0 0h48v48H0z" fill="none"></path>
                              <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>
                          </svg>
                      </div>

                      <div className="handling-shuffle" title="Shuffle">
                          <svg  fill="none"  className="icon-shuffle"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="shuffle">
                              <polyline points="16 3 21 3 21 8"></polyline>
                              <line x1="4" x2="21" y1="20" y2="3"></line>
                              <polyline points="21 16 21 21 16 21"></polyline>
                              <line x1="15" x2="21" y1="15" y2="21"></line>
                              <line x1="4" x2="9" y1="4" y2="9"></line>
                          </svg>
                      </div>
                  </div>

                  <div className="current">
                      <div className="current-image" style={{backgroundImage: `url(${current})`}}> </div>
                      <div className="current-info">
                          <div className="current-info__top">
                              <div className="current-info__titles">
                                  <h2 className="current-info__group">NF</h2>
                                  <h3 className="current-info__track">The search</h3>
                              </div>
                              <div className="current-info__year">2023</div>
                          </div>

                          <div className="controls">
                             <div className="controls-buttons">
                                 <div className="controls-button controls-prev">
                                     <svg className="icon-arrow">
                                         <g clipPath="url(#clip0_3_36)">
                                             <path d="M0.421875 12.6139L16.1789 0.236038C16.3458 0.106875 16.5456 0.0270194 16.7556 0.00550937C16.9655 -0.0160006 17.1773 0.0216939 17.367 0.114327C17.5566 0.206959 17.7166 0.350831 17.8287 0.529658C17.9408 0.708485 18.0006 0.915127 18.0014 1.12619V5.87229L25.1775 0.236038C25.3458 0.107434 25.5465 0.0279328 25.7572 0.00633902C25.9679 -0.0152547 26.1805 0.0219022 26.3714 0.113694C26.5592 0.208342 26.7172 0.352931 26.8281 0.531561C26.939 0.710191 26.9985 0.915944 27 1.12619V25.8776C26.998 26.0877 26.9383 26.2933 26.8275 26.4719C26.7166 26.6504 26.5589 26.7951 26.3714 26.8901C26.2157 26.9633 26.0456 27.0007 25.8736 26.9998C25.6216 27.0014 25.3764 26.9182 25.1775 26.7635L18.0056 21.1273V25.8776C18.0037 26.0883 17.9436 26.2943 17.8319 26.473C17.7202 26.6517 17.5613 26.796 17.3728 26.8901C17.2175 26.9644 17.0472 27.0019 16.875 26.9998C16.6229 27.0024 16.3774 26.9191 16.1789 26.7635L0.421875 14.3899C0.288992 14.2832 0.181757 14.148 0.108074 13.9943C0.0343914 13.8406 -0.00385857 13.6723 -0.00385857 13.5019C-0.00385857 13.3315 0.0343914 13.1632 0.108074 13.0095C0.181757 12.8558 0.288992 12.7206 0.421875 12.6139ZM24.7514 23.5573V3.44229L18.0014 8.74104L15.7486 10.5087L11.9517 13.4998L15.7486 16.4951L24.7514 23.5573ZM15.7486 23.5573V19.3639L9.42047 14.3899C9.28618 14.2841 9.17765 14.1492 9.10302 13.9954C9.02839 13.8416 8.98962 13.6729 8.98962 13.5019C8.98962 13.3309 9.02839 13.1622 9.10302 13.0084C9.17765 12.8546 9.28618 12.7197 9.42047 12.6139L15.7486 7.63994V3.44229L2.95312 13.4998L15.7486 23.5573Z"></path>
                                         </g>
                                         <defs>
                                             <clipPath id="clip0_3_36">
                                                 <rect width="27" height="27" fill="white" transform="matrix(-1 0 0 1 27 0)"></rect>
                                             </clipPath>
                                         </defs>
                                     </svg>
                                 </div>

                                 <div className="controls-button controls-play">
                                     <svg className="icon-pause">
                                         <path d="M20 36.6667C29.2047 36.6667 36.6666 29.2047 36.6666 20C36.6666 10.7953 29.2047 3.33333 20 3.33333C10.7952 3.33333 3.33331 10.7953 3.33331 20C3.33331 29.2047 10.7952 36.6667 20 36.6667Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                         <path d="M16.6667 25V15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                         <path d="M23.3333 25V15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                     </svg>
                                     <svg className="icon-play">
                                         <path d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693252 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77486 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9932 11.7586 30.3053 7.69288 27.3062 4.69377C24.3071 1.69465 20.2414 0.00676998 16 0ZM22.7328 16.5376L12.4928 22.9376C12.392 22.9986 12.2777 23.0337 12.16 23.04C12.0528 23.0405 11.9472 23.0141 11.8528 22.9632C11.7527 22.9069 11.6692 22.8252 11.6108 22.7263C11.5523 22.6274 11.521 22.5149 11.52 22.4V9.6C11.521 9.48514 11.5523 9.37259 11.6108 9.2737C11.6692 9.17482 11.7527 9.0931 11.8528 9.0368C11.9511 8.97687 12.0641 8.94518 12.1792 8.94518C12.2944 8.94518 12.4073 8.97687 12.5056 9.0368L22.7456 15.4368C22.8384 15.4925 22.9151 15.5714 22.9684 15.6656C23.0217 15.7598 23.0497 15.8662 23.0497 15.9744C23.0497 16.0826 23.0217 16.189 22.9684 16.2832C22.9151 16.3774 22.8384 16.4562 22.7456 16.512L22.7328 16.5376Z"></path>
                                     </svg>
                                 </div>

                                 <div className="controls-button controls-next">
                                     <svg className="icon-arrow">
                                         <g clipPath="url(#clip0_3_36)">
                                             <path d="M0.421875 12.6139L16.1789 0.236038C16.3458 0.106875 16.5456 0.0270194 16.7556 0.00550937C16.9655 -0.0160006 17.1773 0.0216939 17.367 0.114327C17.5566 0.206959 17.7166 0.350831 17.8287 0.529658C17.9408 0.708485 18.0006 0.915127 18.0014 1.12619V5.87229L25.1775 0.236038C25.3458 0.107434 25.5465 0.0279328 25.7572 0.00633902C25.9679 -0.0152547 26.1805 0.0219022 26.3714 0.113694C26.5592 0.208342 26.7172 0.352931 26.8281 0.531561C26.939 0.710191 26.9985 0.915944 27 1.12619V25.8776C26.998 26.0877 26.9383 26.2933 26.8275 26.4719C26.7166 26.6504 26.5589 26.7951 26.3714 26.8901C26.2157 26.9633 26.0456 27.0007 25.8736 26.9998C25.6216 27.0014 25.3764 26.9182 25.1775 26.7635L18.0056 21.1273V25.8776C18.0037 26.0883 17.9436 26.2943 17.8319 26.473C17.7202 26.6517 17.5613 26.796 17.3728 26.8901C17.2175 26.9644 17.0472 27.0019 16.875 26.9998C16.6229 27.0024 16.3774 26.9191 16.1789 26.7635L0.421875 14.3899C0.288992 14.2832 0.181757 14.148 0.108074 13.9943C0.0343914 13.8406 -0.00385857 13.6723 -0.00385857 13.5019C-0.00385857 13.3315 0.0343914 13.1632 0.108074 13.0095C0.181757 12.8558 0.288992 12.7206 0.421875 12.6139ZM24.7514 23.5573V3.44229L18.0014 8.74104L15.7486 10.5087L11.9517 13.4998L15.7486 16.4951L24.7514 23.5573ZM15.7486 23.5573V19.3639L9.42047 14.3899C9.28618 14.2841 9.17765 14.1492 9.10302 13.9954C9.02839 13.8416 8.98962 13.6729 8.98962 13.5019C8.98962 13.3309 9.02839 13.1622 9.10302 13.0084C9.17765 12.8546 9.28618 12.7197 9.42047 12.6139L15.7486 7.63994V3.44229L2.95312 13.4998L15.7486 23.5573Z"></path>
                                         </g>
                                         <defs>
                                             <clipPath id="clip0_3_36">
                                                 <rect width="27" height="27" fill="white" transform="matrix(-1 0 0 1 27 0)"></rect>
                                             </clipPath>
                                         </defs>
                                     </svg>
                                 </div>
                             </div>

                              <div className="controls-progress">
                                  <div className="progress">
                                      <div className="progress-current" style={{width: "23%"}}></div>
                                  </div>
                                  <div className="timeline">
                                      <div className="timeline-start">
                                          <span>00:00</span>
                                      </div>
                                      <div className="timeline-end">
                                          <span>02:32</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
                  {(<div className="list">
                      <p className="list-title">All tracks</p>
                      <div className="items"> {items}</div>
                  </div>)}

              </div>
          </main>
      </div>
  );
}

export default App;
