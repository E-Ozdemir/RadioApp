import React, { useState } from 'react'
import { useEffect } from 'react';
import Channels from '../Channel/Channels';
import axios from 'axios';
import { getRequest } from '../../utils/HttpRequest';
import './Radio.scss'

export default function Radio() {

    const [channelName, setChannelName] = useState();
    const [radio, setRadio] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        getRequest(setRadio)
    }, [])

    const footer = (isPlaying) => {
        return (
            isPlaying ? (
                <div>
                    <span id='playing-text'>CURRENTLY PLAYING</span>
                    <div className=''>
                        {channelName}
                    </div>

                </div>
            ) : (null)
        )
    }

    const myFunc = () => {
        return
    }
    return (
        <div className='main'>
            <header className='radio_header'>
                STATIONS
            </header>
            <section className='channel_list'>
                {radio?.map((channel, index) => {
                    return (
                        <Channels
                            key={index}
                            channel={channel}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setChannelName={setChannelName} />
                    )
                })}
            </section>
            <footer>
                {footer(isPlaying)}
            </footer>
        </div>
    )
}


