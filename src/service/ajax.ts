import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
    timeout: 10* 1000,
})

instance.interceptors.response.use(
    res => {
        const resData = (res.data || {}) as ResType
        const {code, data, msg} = resData
        

        if(code != 0) {
            if (msg) {
                message.error(msg)
            }
            throw new Error(msg)
        }

        return data as any
    }
)

export default instance

export type ResType = {
    code: number,
    data?: any,
    msg?: string
}

export type ResDataType = {
    // 只要有string类型的key就可以
    [key: string]: any
}