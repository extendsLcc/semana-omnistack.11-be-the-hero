import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../../services/api'

import {FiLogIn} from "react-icons/fi";

import heroesImg from '../../../assets/images/heroes.png';
import logoImg from '../../../assets/images/logo.svg';

import './styles.css'

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {

        e.preventDefault();

        try {

            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        } catch (e) {

            alert('Falha no login, tente novamente.')

        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={({target}) => setId(target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
