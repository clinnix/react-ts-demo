import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Space, Divider, Tag, Popconfirm, Modal } from 'antd'
import { EditOutlined, LineChartOutlined, StarOutlined, CopyOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons'
import styles from './QuestionCard.module.scss'

export type PropsType = {
  id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { confirm } = Modal
  const { id, title, createAt, answerCount, isPublished, isStar} = props
  
  function duplicate() {
    alert('执行复制')
  }

  function del() {
    confirm({
        title: '确定删除该问卷？',
        icon: <ExclamationCircleOutlined />,
        onOk: () => alert('删除')
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}> 
            <Space>
                {isStar && <StarOutlined style={{color: 'red'}} />}
                {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
            <Space>
                {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
                <span>答卷：{answerCount}</span>
                {createAt}
            </Space>
         
        </div>
      </div>
      <Divider/>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => {
                nav(`/question/edit/${id}`)
              }}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              disabled={!isPublished}
              onClick={() => {
                nav(`/question/stat/${id}`)
              }}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
            <Space>
                <Button icon={<StarOutlined/>} type="text" size='small'> 
                    {isStar ? '取消标星': '标星'}
                </Button>
                <Popconfirm 
                    title='确定复制该问卷'
                    okText='确定'
                    cancelText='取消'
                    onConfirm={duplicate}
                    >
                    <Button icon={<CopyOutlined/>} type="text" size='small'>
                        复制
                    </Button>
                </Popconfirm>
                
                <Button icon={<DeleteOutlined/>} type="text" size='small' onClick={del}>
                    删除
                </Button>
            </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
