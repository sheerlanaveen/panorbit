import { Col, Row, Slider, Space } from "antd";
import React from "react";


import { SiderMenu } from "../components/SiderMenu";
import { ProfileContent } from "./ProfileContent";
import './ProfilePage.css'

export const ProfilePage = () => {
    return (
        <div className="cont-page">
            <Space>
                <SiderMenu />
                <ProfileContent />
            </Space>

        </div>

    )
}