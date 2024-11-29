import { useRequest } from "ahooks";
import { getQuestionListService } from '../service/question'
import { useSearchParams } from "react-router-dom";


function useLoadQuestionListData(){
    const [searchParams] = useSearchParams()
    console.log('keyword', searchParams.get('keyword'))
    const {data, loading, error} = useRequest(async () => {
        const keyword = searchParams.get('keyword') || '';
        const data = await getQuestionListService({keyword})
        return data
    },
    {
        refreshDeps: [searchParams]
    }
)
    
    return {data, loading, error}
 }

 export default useLoadQuestionListData