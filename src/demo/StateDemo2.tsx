import React,{FC, useState} from "react";

const Demo: FC = () => {

    const [userInfo, setUserInfo] = useState({name: '陈真',age: 20});

    function changeAge() {
        setUserInfo({...userInfo, age: 21});
    }

    return (
        <div>
            <h2>state 不可变数据</h2>
            <div>{JSON.stringify(userInfo)}</div>
            <button onClick={changeAge}>change age</button>
        </div>
    )
}

export default Demo;