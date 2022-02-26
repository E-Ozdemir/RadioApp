import React, { useState } from "react";
import "./Channel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const Channels = ({
  channel,
  setIsPlaying,
  isPlaying,
  setChannelName,
  key
}) => {
  const [showImage, setShowImage] = useState(false);
  function isRadioOpen() {
    setShowImage(!showImage);
    setIsPlaying(!isPlaying);
    setChannelName(channel.name);
  }

  const withImage = () => {
    return (
      <div className="channel_wrapper_image">
        <div className="image_wrapper">
          <FontAwesomeIcon icon={faCirclePlus} />
          <img className="radio_image" src={channel.image} alt="" />
          <FontAwesomeIcon icon={faCircleMinus} />
        </div>
        <div className="channel_wrapper">
          <span>{channel.name}</span>
          <span>{channel.frequency}</span>
        </div>
      </div>
    );
  };
  const withoutImage = () => {
    return (
      <div className="channel_wrapper">
        {/* <p>a{key}</p> */}
        <p>{channel.name}</p>
        <p>{channel.frequency}</p>
      </div>
    );
  };

  return (
    <div className="channels" onClick={() => isRadioOpen()}>
      {showImage ? withImage() : withoutImage()}
    </div>
  );
};

export default Channels;

// <div className="channels" onClick={() => isRadioOpen()}>
//     {showImage ? (
//         <>
//             <img src={channel.image} alt="" />
//             <span>{channel.name}</span>
//             <span>{channel.frequency}</span>

//         </>
//     ) : (
//         <>
//             <span>{channel.name}</span>
//             <span>{channel.frequency}</span>
//             <hr />
//         </>
//     )}
// </div>
