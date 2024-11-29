import Mock from 'mockjs'


Mock.mock('/api/test', 'get', () => {
    return {
        error: 0,
        data: {
            name: `demo实例数据 ${Date.now()}`
        }
    }
})