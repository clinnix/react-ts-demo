import { Divider } from 'antd'
import React, { FC, useState, ChangeEvent } from 'react'

const Demo: FC = () => {
  const [text, setText] = useState<string>('hello')
  const [gender, setGender] = useState<string>('female')
  const [checked, setChecked] = useState(false)
  const [selectedCityList, setSelectedCityList] = useState<string[]>([])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value)
  }

  function genHtml() {
    return { __html: text.replaceAll('\n', '<br/>') }
  }

  function toggleChecked() {
    setChecked(!checked)
  }

  function handleCheckboxChage(event: ChangeEvent<HTMLInputElement>){
    const city = event.target.value;
    if(selectedCityList.includes(city)) {
        setSelectedCityList(selectedCityList.filter((c) => {
            if(c === city) return false;
            return true;
        }))
    }else{
        setSelectedCityList(selectedCityList.concat(city))
    }
  }

  /**
   * 
   * @param event 
   * {
   *  k1:v1,
   *  k2:v2,
   *  k3:v3
   * }
   */
  function handleSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault() //阻止默认提交行为
  }

  return (
    <>
      <p>Form elem demo</p>
      <div>
        {/* <input value={text} onChange={handleChange}/> */}
        <textarea value={text} onChange={handleAreaChange}></textarea>
        <div>
          <p dangerouslySetInnerHTML={genHtml()}></p>
        </div>

        <Divider />
        <div>
          <label htmlFor="radio1">男</label>
          <input
            type="radio"
            id="radio1"
            name="gender"
            value="male"
            checked={gender == 'male'}
            onChange={handleRadioChange}
          />
          <label htmlFor="radio2">女</label>
          <input
            type="radio"
            id="radio2"
            name="gender"
            value="female"
            checked={gender == 'female'}
            onChange={handleRadioChange}
          />
          <button onClick={() => console.log(gender)}>打印</button>
        </div>

        <Divider />
        {/* <div>
                    <label htmlFor="checkbox1">选中</label>
                    <input type="checkbox" id="checkbox1" checked={checked} onChange={toggleChecked}/>
                </div> */}
        <Divider />
        <div>
          <label htmlFor="checkbox1">北京</label>
          <input
            type="checkbox"
            id="checkbox1"
            value="beijing"
            checked={selectedCityList.includes('beijing')}
            onChange={handleCheckboxChage}
          />
          <label htmlFor="checkbox2">上海</label>
          <input
            type="checkbox"
            id="checkbox2"
            value="shanghai"
            checked={selectedCityList.includes('shanghai')}
            onChange={handleCheckboxChage}
          />
          <label htmlFor="checkbox3">深圳</label>
          <input
            type="checkbox"
            id="checkbox3"
            value="shenzhen"
            checked={selectedCityList.includes('shenzhen')}
            onChange={handleCheckboxChage}
          />
          
          <input type="hidden" name="cities" value={JSON.stringify(selectedCityList)}/>
        </div>

        <Divider />
        
        <div>
            <form action="/api/post" onSubmit={handleSubmit}>
                <input type="text" name="k1" value="v1" onChange={() => {}}/> 
                <br/>
                <input type="textarea" name="k2" value="v2" onChange={() => {}}/>
                <br/>
                <input type="hidden" name="k3" value="v3" onChange={() => {}}/>
                <button type='submit'>提交</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Demo
