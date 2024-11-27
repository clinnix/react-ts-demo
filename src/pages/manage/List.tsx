import React, {FC, useState} from "react";
// import {useTitle} from 'ahooks'
import { Typography } from "antd";
import QuestionCard, {PropsType} from '../../components/QuestionCard'
import ListSearch from "../../components/ListSearch";
import styles from './common.module.scss'


const rawQuestionList: PropsType[] = [
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
        isPublished: true,
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
        isPublished: true,
        isStar: true,
        answerCount: 2,
        createAt: '04月01日 04:54',
      }
]

const {Title} = Typography;

const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>
            我的问卷
            </Title>
        </div>
        <div className={styles.right}>
            <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 && questionList.map((q:PropsType) => {
            const {id} = q;
            return <QuestionCard key={id} {...q}/>
        })}
      </div>
      <div className={styles.footer}>
        loadMore... 上划加载更多...
      </div>
    </>
  )
}

export default List