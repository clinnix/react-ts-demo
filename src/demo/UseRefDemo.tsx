import React, {FC, useRef} from "react";

const Demo: FC = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    function selectInput(){
        const inputElem = inputRef.current;
        if (inputElem) inputElem.select();
    }

    return <div>
        <input ref={inputRef} type="text" />
        <button onClick={selectInput}>选中 input</button>
    </div>
}

export default Demo;