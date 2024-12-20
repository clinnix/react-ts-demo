import axios, {ResDataType} from './ajax'

// 获取单个问卷信息
export async function getQuestionService(id: string): Promise<ResDataType> {
    const url = `/api/question/${id}`
    const data = (await axios.get(url)) as ResDataType
    return data;
}

//创建问卷
export async function createRequestionService(): Promise<ResDataType> {
    const url = '/api/question'
    const data = (await axios.post(url)) as ResDataType
    return data;
}

type SearchOption = {
    keyword: string
}

//获取（问卷）列表
export async function getQuestionListService(opt: Partial<SearchOption>): Promise<ResDataType> {
    const url = '/api/question'
    const data = (await axios.get(url, {params: opt})) as ResDataType
    return data
}