"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ YoutubeId }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState);
    };

    const options = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    const Player = () => {
        return (
            <div className="fixed bottom-5 right-5 w-64 sm:w-80 p-2 bg-black bg-opacity-80 shadow-lg transition-transform transform">
                <button
                    onClick={handleVideoButton}
                    className="absolute top-2 right-2 text-white text-3xl font-semibold p-1 rounded-full z-50"  // z-50 to ensure it's above everything else
                >
                    X
                </button>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
                    <YouTube
                        videoId={YoutubeId}
                        onReady={(event) => event.target.pauseVideo()}
                        opts={options}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                </div>
            </div>
        );
    };

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoButton}
                className="fixed bottom-5 right-5 w-32 sm:w-40 md:text-md text-sm bg-base-200 text-colorPrimarySaya py-1 px-1 rounded-lg shadow-lg font-bold transition-colors"
            >
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer/>
}

export default VideoPlayer;
