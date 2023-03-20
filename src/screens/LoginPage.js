import { Space } from "antd";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

export const LoginPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://panorbit.in/api/users.json')
            .then(res => res.json())
            .then((da) => setData(da))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="page">
            <div className="wave">
                <div className="container" >
                    <div className="container-header" >
                        <h1>Select an account </h1>
                    </div>
                    <div className="container-data">
                        <tbody>
                            {data.users && data.users.map((item, id) => (
                                <tr key={id}>
                                    <Space>
                                        <td> <img src={item.profilepicture} alt={item.name} height={40} width={40} style={{ borderRadius: '50px' }} /></td>
                                        <td onClick={() => navigate(`${id}`)} > {item.name}</td>
                                    </Space>
                                </tr>

                            ))}

                        </tbody>
                    </div>

                </div>
            </div>
        </div>
    )
}