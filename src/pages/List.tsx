import React, { FC, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import styles from './List.module.scss'

const rawQuestionList = [
    {
        id: 'q1',
        title: '问卷1',
        isPublished: false,
        isStar: false,
        answerCount: 5,
        createAt: '3月10日 13:23',
      },
      {
        id: 'q2',
        title: '问卷2',
        isPublished: false,
        isStar: true,
        answerCount: 3,
        createAt: '3月11日 14:23',
      },
      {
        id: 'q3',
        title: '问卷3',
        isPublished: false,
        isStar: false,
        answerCount: 5,
        createAt: '04月01日 03:15',
      },
      {
        id: 'q4',
        title: '问卷4',
        isPublished: false,
        isStar: true,
        answerCount: 2,
        createAt: '04月01日 04:54',
      }
]

const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
            <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>
            搜索
        </div>
      </div>
      <div className={styles.content}>
        {questionList.map((q) => {
            const {id} = q;
            return <QuestionCard key={id} {...q}/>
        })}
      </div>
      <div className={styles.footer}>
        footer
      </div>
    </>
  )
}

export default List
