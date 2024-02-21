import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Chai(){
    let renderCount = useRef(0)
    const [name, setName] = useState("")
    // const [count, setCount] = useState(-1)
    useEffect(() => {
        // setCount(prev => prev + 1)
        renderCount.current += 1
        console.log(renderCount)
    }, [name])

    return(
        <>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </>
    )
}

export default Chai;