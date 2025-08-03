import { useState, useEffect } from "react";
export default function StarBackground(){

const [stars,setStars] = useState([]);

    useEffect(() => {
    generateStars()
},[]);

function generateStars(){
    const numberofStars = Math.floor((window.innerWidth * window.innerHeight) /1000);

    const newStars = [];

    for(let i=0; i<numberofStars; i++){
        newStars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4+ 2
        });
    }

    setStars(newStars);
}


    return(
        <>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {
                    stars.map(
                        (star) =>(
                            <div key={star.id} className="star animate-pulse-subtle" style={{
                                width: star.size + 'px',
                                height: star.size + 'px',
                                left: star.x + '%',
                                top: star.y + '%',
                                opacity: star.opacity,
                                animationDuration: star.animationDuration + 's',
                            }}>
                            </div>
                        )


                    )
                }
            </div>
        </>
    )
}