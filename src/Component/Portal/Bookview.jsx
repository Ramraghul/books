import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Bookview() {

    let params = useParams()

    let [demo, setDemo] = useState({})

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            let pro = await axios.get(`https://62949d76a7203b3ed06d0192.mockapi.io/Library/${params.id}`)
            setDemo(pro.data)
        } catch (error) {

        }
    }
    return (
        <>
            <div className="row">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top h10" src={demo.Book} alt="Loading.." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{demo.Tittle}</h5>
                                            Author:{demo.Author}
                                            <br />
                                            Rack:{demo.Price}
                                            <br />
                                            InwardTime:{demo.Time}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Bookview