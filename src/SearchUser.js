import Header from './Header'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { fetchData } from './api'


function SearchUser() {

    const [data, setData] = useState([]);

    async function search(key) {

        const response = await fetchData("http://127.0.0.1:8081/api/users/", key)

        setData(response)

    }

    const assignees = data.length > 0 ? data[0] : []
    const submitted = data.length > 1 ? data[1] : []
    const organization = data.length > 2 ? data[2] : []

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Userss</h1>
                <br />
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search" />

                <Table>

                    {assignees && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>Assignee Ticket Subject</p>
                        </td>
                        {assignees.map((item) =>
                            <td>{item}</td>
                        )}
                    </tr>
                    }

                    {submitted && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>submitted Ticket Subject</p>
                        </td>
                        {submitted.map((item) =>
                            <td>{item}</td>
                        )}
                    </tr>
                    }

                    {organization && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>Organization</p>
                        </td>
                        {organization.map((item) =>
                            <td>{item}</td>
                        )}
                    </tr>
                    }


                </Table>

            </div>
        </div>
    )
}

export default SearchUser