import { useState } from "react";

function Detective(){
    const [ sherlock,setSherlock] = useState('психопат')

    const handleClick = () =>{
        setSherlock('высокоактивный социопат')
    }

    return(
        <div>
            Шерлок - {sherlock}

            <button onClick={handleClick}>
                УЗНАТЬ ПРАВДУ
            </button>
        </div>
    )
}

export default Detective