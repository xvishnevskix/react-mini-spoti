import axios from "axios";
import React, {useEffect, useState } from "react"
import {ITrack} from "../models";
import Track from "../components/Track";
import {data} from "../assets/data";
import useSound from "use-sound";




export function useTracks() {
    const [audio, setAudio] = useState<ITrack[]>([])
    const [loading, setLoading] = useState(false)

    // const addTrack = (product:ITrack) => {
    //     setData(prev => [...prev, product])
    // }

    const fetchProducts = async () => {
        setLoading(true)
        const response = await axios.get<ITrack[]>(`https://63e0c30edd7041cafb3889e2.mockapi.io/spotify`)
        setAudio(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    // const [play, { pause, duration, sound }] = useSound(data);


    return {audio, loading}
}