"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ YoutubeId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState);
    };

    const options = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const Player = () => {
        return (
            <div className="fixed bottom-5 right-5 w-64 sm:w-80 p-2 bg-white shadow-lg rounded-lg transition-all duration-300 transform scale-100">
                <button
                    onClick={handleVideoButton}
                    className="absolute top-2 right-2 text-gray-600 text-2xl font-semibold p-1 rounded-full z-50 hover:text-red-500 transition-colors duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <YouTube
                        videoId={YoutubeId}
                        opts={options}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                </div>
            </div>
        );
    };

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoButton}
                className="fixed bottom-5 right-5 w-40 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-full shadow-lg font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-600"
            >
                Watch Trailer
            </button>
        );
    };

    return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;