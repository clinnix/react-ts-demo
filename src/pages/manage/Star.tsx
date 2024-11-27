import React, {FC, useState} from "react";
// import {useTitle} from 'ahooks'
import { Typography, Empty} from "antd";
import QuestionCard, {PropsType} from '../../components/QuestionCard'
import styles from './common.module.scss'

const rawQuestionList: PropsType[] = [
    {
        id: 'q1',
        title: '问卷1',
        isPublished: true,
        isStar: true,
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
        isPublished: true,
        isStar: true,
        answerCount: 5,
        createAt: '04月01日 03:15',
      }
]

const {Title} = Typography;

const Star: FC = () => {
    const [questionList, setQuestionList] = useState(rawQuestionList);

    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>星标问卷</Title>
            </div>
            <div className={styles.right}>(搜索)</div>
        </div>
        <div className={styles.content}>
            {questionList.length === 0 && <Empty description="暂无数据"/>}
            {questionList.length > 0 && questionList.map((prop: PropsType) => {
                const {id} = prop;
                return <QuestionCard key={id} {...prop}/>
            })}
        </div>
        <div className={styles.footer}>
            分页
        </div>
        </>
    )
}

export default Star;