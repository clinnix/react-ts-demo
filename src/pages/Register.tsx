import React, { FC } from 'react'
import { Typography, Space, Form, Input, Button, FormProps } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router/index'
const { Title } = Typography

type FieldType = {
  username?: string
  password?: string
  confirm?: string
  nickname?: string
}

const Register: FC = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <Space>
            <Title level={2}>
              <UserAddOutlined />
            </Title>
            <Title level={2}>注册新用户</Title>
          </Space>
        </div>
        <div>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
          >
            <Form.Item label="用户名" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item label="确认密码" name="confirm">
              <Input.Password />
            </Form.Item>
            <Form.Item label="昵称" name="nickname">
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <Link to={LOGIN_PATHNAME}>已有账户，登录</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Register
