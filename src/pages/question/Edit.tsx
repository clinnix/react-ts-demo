import React, {FC, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../../service/question";
import useLoadQuestionData from "../../hooks/useLoadQuestionData";

const Edit: FC = () => {
   
    const {loading, data} = useLoadQuestionData()

    return <>
        <div>
            <p>Edit page</p>
            {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
        </div>
    </>
}

export default Edit;