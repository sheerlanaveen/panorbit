import { Avatar, Col, Form, Image, Layout, Modal, Popconfirm, Row, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import { Route, useParams } from "react-router-dom";
import { Posts } from "./Posts";
import './Profile.css'

export const Profile = () => {
    const id = useParams()
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch('https://panorbit.in/api/users.json')
            .then(res => res.json())
            .then((da) => setData(da.users[id.id]))
            .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <div className="header-content">
                <Typography.Title style={{ paddingLeft: 25 }}>Profile</Typography.Title>
                <Space>
                    <Avatar src={data.profilepicture} size={50} />
                    <Popconfirm   placement="bottom"  >
                    <Typography.Text  >{data.name}</Typography.Text>
                    </Popconfirm>
                </Space>
            </div>
           
            <div>
                <Layout>
                    <Content style={{
                        padding: 2,
                        minHeight: 300,
                        backgroundColor: 'white'
                    }}>
                        <Row>
                            <Col className="login-left" span={10} style={{ justifyContent: 'center' }}>
                                <Avatar src={data.profilepicture} size={150} style={{ marginLeft: '7em' }} />
                                <h2 style={{ marginLeft: '5em', padding: '6px' }} >{data.name}</h2>
                                <Form
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    layout="horizontal"
                                    style={{ paddingTop: '10px' }}
                                >
                                    <Form.Item label="Username">
                                        {data.username}
                                    </Form.Item>
                                    <Form.Item label="e-mail">
                                        {data.email}
                                    </Form.Item>
                                    <Form.Item label="Phone">
                                        {data.phone}
                                    </Form.Item>
                                    <Form.Item label="Website">
                                        {data.website}
                                    </Form.Item>
                                    <h3 style={{ marginLeft: '8em' }}>Company</h3>
                                    <Form.Item label="Name">
                                        {data.company?.name}
                                    </Form.Item>
                                    <Form.Item label="CatchPhrase">
                                        {data.company?.catchPhrase}
                                    </Form.Item>
                                    <Form.Item label="bs">
                                        {data.company?.bs}
                                    </Form.Item>

                                </Form>
                            </Col>
                            <Col className="login-right" justify={"center"}
                                align={"left"} span={12}  >

                                <Form
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    layout="horizontal"
                                >
                                    <h3 style={{ marginLeft: '6em' }}>Address:</h3>
                                    <Form.Item label="Street ">
                                        {data.address?.street}

                                    </Form.Item>
                                    <Form.Item label="Suite ">
                                        {data.address?.suite}
                                    </Form.Item>

                                    <Form.Item label="City ">
                                        {data.address?.city}
                                    </Form.Item>
                                    <Form.Item label="City ">
                                        {data.address?.city}
                                    </Form.Item>
                                    <Form.Item label="Zipcode ">
                                        {data.address?.zipcode}
                                    </Form.Item>
                                    <Image src="./images/mapImage.png" alt='map' height={'17em'} width={'40em'} style={{ marginLeft: '10em' }} />
                                    <Row justify={'end'}>
                                        <Space>
                                            <Form.Item label="Lat ">
                                                {data.address?.geo?.lat}
                                            </Form.Item>
                                            <Form.Item label="Lng">
                                                {data.address?.geo?.lng}
                                            </Form.Item>
                                        </Space>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        </div>
    )
}