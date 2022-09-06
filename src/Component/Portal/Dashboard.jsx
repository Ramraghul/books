import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate()
    // Component navigation

    var EditBook = (data) => {
        navigate(`Edit/${data.id}`)
    }
    var ViewBook = (data) => {
        navigate(`View/${data.id}`)
    }

    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        dataLoad()
    }, [])

    let dataLoad = async () => {
        setloading(true)
        let book = await axios.get("https://62949d76a7203b3ed06d0192.mockapi.io/Library")
        setproduct(book.data)
        setloading(false)

    }

    let DeleteBook = async (id) => {
        try {
            let ask = window.confirm("BOSS are you sure to Delete this Book..?")
            if (ask) {
                await axios.delete(`https://62949d76a7203b3ed06d0192.mockapi.io/Library/${id}`)
            }
            let index = product.findIndex((obj) => obj.id === id)
            product.splice(index, 1);
            setproduct([...product])


        } catch (error) {

        }
    }
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">BOOKS</h1>
            </div>

            {/* Card */}

            <div className="row">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                            {/* Card all */}
                            {
                                loading ? <span>Loading....</span> : product.map((data, index) => {
                                    return (
                                        <>
                                            <div className="col mb-5" key={index}>
                                                <div className="card h-100">

                                                    {
                                                        data.Availability ? <div className="badge bg-success text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Available</div> :
                                                            <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Not Available </div>
                                                    }
                                                    <img className="card-img-top h10" src={data.Book} alt="Loading.." />
                                                    <div className="card-body p-4">
                                                        <div className="text-center">
                                                            <h5 className="fw-bolder">{data.Tittle}</h5>
                                                            Author:{data.Author}
                                                            <br />
                                                            Rack:{data.Price}
                                                            <br />
                                                            InwardTime:{data.Time}
                                                        </div>
                                                    </div>
                                                    <div class="btn-group me-2" role="group" aria-label="Second group">
                                                        <button type="button" class="btn btn-success m-1" onClick={() => { ViewBook(data) }} disabled={!data.Availability}>View</button>
                                                        <button type="button" class="btn btn-warning m-1" onClick={() => { EditBook(data) }} >Edit</button>
                                                        <button type="button" class="btn btn-danger m-1" onClick={() => { DeleteBook(data.id) }} disabled={!data.Availability}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </div>


        </>
    )
}

export default Dashboard