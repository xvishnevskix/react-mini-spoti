import React, {useEffect,useRef, useState} from 'react';
import Loader from "./Loader";
import {useTracks} from "../context/tracks";
import {ITrack} from "../models";
import Track from "./Track";



const List = () => {

    const {audio, loading} = useTracks()
    const [tracks, setTracks] = useState<ITrack[]>([])
    const audioPlayer = useRef<HTMLAudioElement>(null)
    const [duration, setDuration] = useState(0)


    const track: Array<ITrack[]> = audio.map( (item) => {

        const audi = new Audio(`beat1.mp3`)

        audi.addEventListener("loadeddata", () => {
            const dur = audi.duration
            console.log(dur)
            setDuration(dur)
            console.log(audi.duration)
        })
        // @ts-ignore
        const newItem: Array<ITrack> = {...item, duration, audi}
        return newItem
    })



    useEffect(( ) => {

        // @ts-ignore
        setTracks(track)
        // @ts-ignore

    }, [audio])

    const items = tracks.map((obj) =>
        <Track key={obj.id} {...obj} />
    )





    return (
        <div className="list">
            <p className="list-title">All tracks</p>
            <div className="items">

                {loading && <Loader/>}
                {items}</div>
        </div>
    );
};

export default List;