import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditBook() {
    
    const params = useParams()
    const formik = useFormik({
        initialValues: {
            Availability: "",
        },
        validate: (value) => {
            var errors = {}

            if (value.Availability === "") {
                errors.Availability = "Enter the name"
            }
            return errors
        },
        onSubmit: async (data) => {
            try {
                await axios.put(`https://62949d76a7203b3ed06d0192.mockapi.io/Library/${params.id}`, data)
                alert("Availability Edit is Done 'BOSS'")
                
            } catch (error) {

            }
        }
    })

    useEffect(() => {
        ComeData()
    }, [])

    let ComeData = async () => {
        try {
            let set = await axios.get(`https://62949d76a7203b3ed06d0192.mockapi.io/Library/${params.id}`)
            formik.setValues({
                Availability: set.data.Availability,
            })
        } catch (error) {

        }
    }
    return (
        <div className="container ">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Availability</label>
                        <input className="form-control" type={"text"} placeholder="true or false" value={formik.values.Availability} onChange={formik.handleChange} name="Availability" />
                    </div>
                    <div>
                        <button className="btn btn-danger mt-2 ms-2" type="submit" value="submit" disabled={!formik.isValid} >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditBook;