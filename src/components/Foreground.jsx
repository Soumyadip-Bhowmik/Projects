import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
    const ref = useRef(null);
    const data = [
        {desc: "This is the background color of the card", filesize: "0.9mb", close: false, tag:{isOpen: true, tagTitle:"Download Now", tagColor:"green"} },
        {desc: "This is the background color of the card", filesize: "0.9mb", close: true, tag:{isOpen: true, tagTitle:"Download Now", tagColor:"blue"} },
        {desc: "This is the background color of the card", filesize: "0.9mb", close: true, tag:{isOpen: false, tagTitle:"Download Now", tagColor:"green"} },
    ];

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} key={index} />
            ))}
        </div>
    );
}

export default Foreground;
