import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';

import collab from '../../assests/collab.jpg';
import location from '../../assests/icons8-location-50.png';
import "./Contact.scss";

const validate = values => {
  const errors = {};
  if (!values.user_name) {
    errors.user_name = 'Required *';
  } else if (values.user_name.length > 15) {
    errors.user_name = 'Must be 15 characters or less *';
  }

  if (!values.user_email) {
    errors.user_email = 'Required *';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
    errors.user_email = 'Invalid Email Address *';
  }

  if (!values.user_message) {
    errors.user_message = 'Required *';
  } else if (values.user_message.length > 250) {
    errors.user_message = 'Must be 250 characters or less *'
  }

  return errors;
};

const Contact = () => {

  const [sent, setSent] = useState(false);
  const formRef = useRef();


  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_subject: '',
      user_message: ''
    },
    validate,
    onSubmit: values => {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  })


  return (
    <div className='contact'>
      <div className='c_content'>
        <div className='c_left'>
          <h2>Manda un mensaje!</h2>
          <p>Estamos emocionados para ayudar realizar su vision!</p>

          <div className='c_info'>
            <a href='https://www.google.com.mx/maps/place/Destilando+Films/@20.7099769,-102.3335882,17z/data=!3m1!4b1!4m5!3m4!1s0x84294d231f2c0ec1:0x741ef3084dca8667!8m2!3d20.7099719!4d-102.3313995'>
              <img src={location} alt="location icon" />
              Prof. Jose Maria Gonzalez Cruz. 285,
              <br />
              LA PROVIDENCIA, 47180 Arandas, Jal., Mexico
            </a>
            <p><a href='https://mail.google.com/mail/?view=cm&fs=1&to=destiladofilms@gmail.com'>destilandofilms@gmail.com</a><span />348-141-7926</p>
          </div>

          <div className='icons'>
            <a className='youtube' href='#0'>
              <svg
                className="svg-icon"
                width={"25px"}
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"
                />
              </svg>
            </a>

            <a className='facebook' href="#0">
              <svg
                className="svg-icon"
                width={"25px"}
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                />
              </svg>
            </a>

            <a className='instagram' href='#0'>
              <svg
                className="svg-icon"
                width={"25px"}
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className='c_right'>
          {sent ? (
            <div className='c_thanks'>
              <h2>Gracias!</h2>
              <p>Estare en contacto pronto!</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={formik.handleSubmit}>
              <div className='label'>
                <label>Nombre </label>
                {formik.touched.user_name && formik.errors.user_name ? <div className='error'>{formik.errors.user_name}</div> : null}
              </div>
              <input type="text" id="user_name" name="user_name" onChange={formik.handleChange} value={formik.values.user_name} onBlur={formik.handleBlur} />

              <div className='label'>
                <label>Correo </label>
                {formik.touched.user_email && formik.errors.user_email ? <div className='error'>{formik.errors.user_email}</div> : null}
              </div>
              <input type="email" id="user_email" name="user_email" onChange={formik.handleChange} value={formik.values.user_email} onBlur={formik.handleBlur} />

              <div className='label'>
                <label>Mensaje </label>
                {formik.touched.user_message && formik.errors.user_message ? <div className='error'>{formik.errors.user_message}</div> : null}
              </div>
              <textarea id="user_message" name="user_message" onChange={formik.handleChange} value={formik.values.user_message} onBlur={formik.handleBlur} />

              <input className='submit' type='submit' value="Enviar" />
            </form>
          )}
        </div>
      </div>

      <div className='c_img'>
        <img src={collab} alt="Bottom Banner" />
      </div>
    </div>
  );
};

export default Contact;