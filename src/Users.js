import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';

export default function Users() {
    const [data, setData] = useState([])
    useEffect(()=>{
        let url="https://jsonplaceholder.typicode.com/users"
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result)
            })
        })
    },[])
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}
