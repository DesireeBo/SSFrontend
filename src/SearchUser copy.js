import Header from './Header'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

function SearchUser() {

    const [data, setData] = useState([]);

    async function search(key) {

        console.warn(key)

        let result = await fetch("http://127.0.0.1:8081/api/users/" + key, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYmM4NzIxNWEzYzBlYTZkYjkyY2VmN2NhYjRkNTczZWQ4MjkxYjY5YzQyZjVkYmIxZWUyMGE3Yjk5NmQ0NmNmMGE3M2UyNmEyYzZlODk4In0.eyJhdWQiOiIzIiwianRpIjoiNWJiYzg3MjE1YTNjMGVhNmRiOTJjZWY3Y2FiNGQ1NzNlZDgyOTFiNjljNDJmNWRiYjFlZTIwYTdiOTk2ZDQ2Y2YwYTczZTI2YTJjNmU4OTgiLCJpYXQiOjE2MTY5NDg5NjMsIm5iZiI6MTYxNjk0ODk2MywiZXhwIjoxNjQ4NDg0OTYzLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.d4Vkc98uE_l87CEPzFwAmbgT2ikQ6_4mexJvSN5Rjqeu0ymGI2uwSfuXUIH-TqLaIMQLyFGABlixj8aBHd3hBh6-2nQkMebPT3bImA4qalB290-gweRinqEycGJmX2LptfxcVzDYX2XLqcaM-nPT191MvauYTajbXSqDG8VaKbV9DJuizJFII6ac9vk_HLW4EZ8e3ikF1ZLdIyZ0fWsyhQHO_7J-X7gqAI8RvDzMRHEniMUF0qzOAtRGjfR-1QgFW3SBOSrrtTVJN5wS-2oAWY4FXBnPqaA3xyscF5oX9AEzUdpq0-zS7aiO-8X-VpH4LgYWh4YMFdwyFqTvyvKfe7QJ4rZH-hQAp6o-g45-Eiz7RrsKUWkGeCXfK-Rt1LGe_BkZubanU4TIJgCEM2fUghTVcg5uqxNJBd3EZapQZIs5L05B07R9JFwWHAlQd_T0YKTIt0FmzIUBO1fVKUi4w3FUlRtahTsqhQFQxk-Z74pX0032U-4SwV1qoGo9HCS-nZsk9ikBQoKR82F80ct7ZSgRNENXCnGlANlESo3O99AaIO-JuW1dRqcGsj2z-fnhPBsUmQApJ0Teww1o_RkZJDlvk1Glc7UKUCZyv9p52gqdT_yOkHzMR8N4yuopP4s8KYCLMYh1JPdvvb3BZgiYAm-G4zCUURewC8NOurNjBfA',
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
        });
        result = await result.json();
        console.warn(result)
        setData(result)
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search user</h1>
                <br />
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search" />

                <Table>
                    <tr>
                        <td>id</td>
                        <td>url</td>
                    </tr>
                    {

                        [data].map((item) =>
                            <td>id</td>
                        )

                    }
                </Table>

            </div>
        </div>
    )
}

export default SearchUser