import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
  };


export default class edit extends Component {
    state={
        a :'1212'
    }

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 2}}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="标题"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                       
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                         </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
