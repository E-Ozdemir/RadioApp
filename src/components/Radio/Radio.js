import React, { useState } from "react";
import { useEffect } from "react";
import Channels from "../Channel/Channels";
import { getRequest } from "../../utils/HttpRequest";
import "./Radio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Radio() {
  const [channelName, setChannelName] = useState();
  const [radio, setRadio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getRequest(setRadio);
  }, []);

  const footer = (isPlaying) => {
    return isPlaying ? (
      <div>
        <span id="playing-text">CURRENTLY PLAYING</span>
        <div className="">{channelName}</div>
      </div>
    ) : (
      <div className="not-playing">Click any channel to listen!</div>
    );
  };
  return (
    <div className="main">
      <header className="radio_header">
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>STATIONS</span>
        <FontAwesomeIcon icon={faPowerOff} />
      </header>
      <section className="channel_list">
        {radio?.map((channel, index) => {
          return (
            <Channels
              key={index}
              channel={channel}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setChannelName={setChannelName}
            />
          );
        })}
      </section>
      <footer>{footer(isPlaying)}</footer>
    </div>
  );
}
