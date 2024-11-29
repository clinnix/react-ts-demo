import React, {FC, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../../service/question";
import useLoadQuestionData from "../../hooks/useLoadQuestionData";

const Stat: FC = () => {
   
    const {loading, data} = useLoadQuestionData()

    return <>
        <div>
            <p>stat page</p>
            {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
        </div>
    </>
}

export default Stat;