import React, { useState } from 'react';

function YoutubeVideoPlayer({video,timestamps }) {
    const [currentTimestamp, setCurrentTimestamp] = useState(0);

    const handleTimestampClick = (timestamp) => {
        setCurrentTimestamp(timestamp);
        console.log(timestamp);
    };



    return (
        <div>
            <iframe
                width="860"
                height="550"
                src={`https://www.youtube.com/embed/${video}?start=${currentTimestamp}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div>
                <h2>Timestamps</h2>

                    {timestamps.map((timestamp, index) => (
                        <button key={index} onClick={() => handleTimestampClick(timestamp.startTime)}>
                            {timestamp.label}
                        </button>
                    ))}

            </div>
        </div>
    );
}

export default YoutubeVideoPlayer;
