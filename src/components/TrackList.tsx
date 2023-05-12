import React from 'react';
// import current from "../assets/images/beat2.jpg";


type ITrackList = {
    id?: number,
    title: string,
    link: string;
    genre: string;
    track: string;
    group: string;
    year: number;
    duration: number;
    image: string;
}

const TrackList:React.FC<ITrackList> = ({id,link, genre, track, group, year, duration, image}) => {
   const current = `../assets/images/beat4.jpg`
    console.log(duration)
    return (
        <>

                    <div className="item">
                        <div className="item-image" >
                            <img src={image} alt="zxc"/>
                        </div>
                        <div className="item-titles">
                            <h2 className="item-group">{group}</h2>
                            <h3 className="item-track">{track}</h3>
                        </div>
                        <p className="item-duration">{duration}</p>
                        <p className="item-genre">{genre}</p>
                        <div className="item-play">
                            <svg className="icon-play">
                                <path d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693252 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77486 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9932 11.7586 30.3053 7.69288 27.3062 4.69377C24.3071 1.69465 20.2414 0.00676998 16 0ZM22.7328 16.5376L12.4928 22.9376C12.392 22.9986 12.2777 23.0337 12.16 23.04C12.0528 23.0405 11.9472 23.0141 11.8528 22.9632C11.7527 22.9069 11.6692 22.8252 11.6108 22.7263C11.5523 22.6274 11.521 22.5149 11.52 22.4V9.6C11.521 9.48514 11.5523 9.37259 11.6108 9.2737C11.6692 9.17482 11.7527 9.0931 11.8528 9.0368C11.9511 8.97687 12.0641 8.94518 12.1792 8.94518C12.2944 8.94518 12.4073 8.97687 12.5056 9.0368L22.7456 15.4368C22.8384 15.4925 22.9151 15.5714 22.9684 15.6656C23.0217 15.7598 23.0497 15.8662 23.0497 15.9744C23.0497 16.0826 23.0217 16.189 22.9684 16.2832C22.9151 16.3774 22.8384 16.4562 22.7456 16.512L22.7328 16.5376Z"></path>
                            </svg>
                        </div>
                    </div>
        </>
    );
};

export default TrackList;