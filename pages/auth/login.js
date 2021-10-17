import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import Cookies from 'next-cookies';
import { unauthPage } from '../middlewares/authorizationPage';

export async function getServerSideProps(context) {
    await unauthPage(context);
    return {
        props: {}
    }
}
export default function Login() {
    const [fields, setFields] = useState({
        email: '',
        password: '',
    })

    const [status, setStatus] = useState('normal');

    async function loginHandler(e) {
        e.preventDefault();

        const loginReq = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(fields)
        })

        if (!loginReq.ok) return setStatus('error' + loginReq.status);

        const loginRes = await loginReq.json();
        setStatus('success');
        Cookie.set('token', loginRes.token);
    }

    function fieldHandler(e) {
        const name = e.target.getAttribute('name');

        setFields({
            ...fields,
            [name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={loginHandler.bind(this)}>
                <input onChange={fieldHandler.bind(this)} type='text' name='email' placeholder='Email'></input>
                <input onChange={fieldHandler.bind(this)} type='password' name='password' placeholder='Password'></input>

                <button type='submit'>
                    Login
                </button>

                <div>Status : {status}</div>
            </form>
        </div>
    )
}