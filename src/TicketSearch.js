import Header from './Header'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { fetchData } from './api'


function SearchTicket() {

    const [data, setData] = useState([]);

    async function search(key) {

        console.warn(key)

        const response = await fetchData("http://127.0.0.1:8081/api/tickets/", key)

        setData(response)

    }

    const assigneeName = data.length > 0 ? data[0] : []
    const submitterName = data.length > 1 ? data[1] : []
    const organizationName = data.length > 2 ? data[2] : []

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Ticket by Subjectss</h1>
                <br />
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search" />

                <Table>

                    {assigneeName && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>Assignee Name</p>
                        </td>
                        {assigneeName.map((item) =>
                            <td>{item}</td>
                        )}
                    </tr>
                    }

                    {submitterName && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>submitter Name</p>
                        </td>
                        {submitterName.map((item) =>
                            <td>{item}</td>
                        )}
                    </tr>
                    }

                    {organizationName && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>Organization Name</p>
                        </td>
                        {organizationName.map((item) =>
                            <td>{item}</td>
                        )}
                    </tr>
                    }


                </Table>

            </div>
        </div>
    )
}

export default SearchTicket