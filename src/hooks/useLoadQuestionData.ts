import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getQuestionService } from "../service/question";

function useLoadQuestionData() {
    const {id = ''} = useParams()
    // const [loading, setLoading] = useState(true)
    // const [questionData, setQuestionData] = useState({})

    // useEffect( () => {
    //     async function fn() {
    //         const data = await getQuestionService(id)
    //         setQuestionData(data)
    //         setLoading(false)           
    //     }
    //     fn()
    // }, [])
    async function load(){
        const data = await getQuestionService(id)
        return data
    }

    const {loading, data, error} = useRequest(load)
    return {loading, data,error}
}

export default useLoadQuestionData
