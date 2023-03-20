import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SiderMenu = () => {
    const navigate = useNavigate()
    return (
        <div className='pageSider'>
            <Menu style={{ backgroundColor: "#4153C8" }}
                onClick={(items) => navigate(items.key)}
                items={[
                    {
                        label: 'Profile',
                        key: ''
                    },
                    {
                        label: 'Posts',
                        key: 'posts'
                    },
                    {
                        label: 'Gallery',
                        key: 'gallery'
                    },
                    {
                        label: 'ToDo',
                        key: 'todo'
                    }
                ]}
            >
            </Menu>
        </div>
    )
}