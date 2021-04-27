import Header from './Header'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { fetchData } from './api'


function SearchTicket() {

    const [data, setData] = useState([]);

    async function search(key) {

        const response = await fetchData("http://127.0.0.1:8081/api/ticket/", key)

        setData(response)

    }

    const ticketSubject = data.length > 0 ? data : []

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Ticket by IDss</h1>
                <br />
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search" />

                <Table>

                    {ticketSubject && <tr>
                        <td >
                            <p style={{ fontWeight: "bold" }}>Ticket Subject</p>
                        </td>
                        {ticketSubject.map((item) =>
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