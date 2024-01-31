import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isLoaderShown, setIsLoaderShown] = useState(false);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoaderShown(true);
            const response = await fetch('http://localhost:3001/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Toast.fire({
                    icon: "success",
                    title: "form submitted successfully"
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setIsLoaderShown(false);
                console.log('Form Submitted successfully');
            } else {
                if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                    Toast.fire({
                        icon: "warning",
                        title: "Please fill the form completely",
                    });
                }
                else {
                    Toast.fire({
                        icon: "error",
                        title: "error submitting form"
                    });
                    console.log('failed to submit form');
                }
                setIsLoaderShown(false);
            }
        } catch (error) {
            console.error('Error submitting form', error);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className='each-container' id='Contact'>
            <div className='section-container'>
                <div className='sub-heading'>Get In Touch</div>
                <div className='horizontal-line'></div>
                <div className='contact-section'>
                    <form className='contact-box' onSubmit={handleSubmit}>
                        <div className='input-tag'>
                            <label>Name</label>
                            <input placeholder='Enter your Name' name='name' value={formData.name} onChange={handleChange} />
                        </div>
                        <div className='input-tag'>
                            <label>Email</label>
                            <input placeholder='Enter your Email ID' name='email' value={formData.email} type='email' onChange={handleChange} />
                        </div>
                        <div className='input-tag'>
                            <label>Subject</label>
                            <input placeholder='Enter your Subject' name='subject' value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className='input-tag'>
                            <label>Message</label>
                            <textarea placeholder='Your Message' name='message' value={formData.message} onChange={handleChange} />
                        </div>
                        <div className='input-tag-submit'>
                            <button className='submit-button' type='submit'>Submit
                            <div style={{display: isLoaderShown? 'block': 'none'}}>
                            <Oval
                                visible={true}
                                height="20"
                                width="20"
                                color="#18e3a3"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                            </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact