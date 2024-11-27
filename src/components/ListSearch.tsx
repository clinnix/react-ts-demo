import React, { FC } from 'react'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { Input } from 'antd'

const { Search } = Input

const ListSearch: FC = () => {
  const [value, setValue] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function handleSearch(value: string) {
    console.log(value)
  }

  return (
    <>
      <Search
        placeholder="输入关键字"
        value={value}
        allowClear
        onSearch={handleSearch}
        onChange={handleChange}
        style={{ width: '260px' }}
      />
    </>
  )
}

export default ListSearch
