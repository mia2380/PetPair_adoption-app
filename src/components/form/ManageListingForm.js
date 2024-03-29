import React from 'react';
import { manageListingSchema } from '../../validations';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import '../../assets/styles/form/form.css';

export default function ManageListingForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(manageListingSchema)
    })
    const submitForm = async (data) => {
        await props.storeUserListings()
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <p>Input your email to manage your pet listings</p>
            <div className='custom-form'>
                <form onSubmit={handleSubmit(submitForm)}>
                    {/* email input */}
                    <div>
                        <label style={{ marginTop: '0' }}>Email</label>
                        <input className="form-control"
                            type="text"
                            name="userEmail"
                            value={props.userEmail}
                            {...register("userEmail", { onChange: props.updateFormField })} />
                        {errors.userEmail ? <span className="form-error-message"> {errors.userEmail?.message} </span> : null}
                    </div>
                    {/* submit button */}
                    <div className="custom-btn-group">
                        <button className="btn btn-primary custom-btn-primary"
                            type="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}