import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import api from '../../../services/api'

import {FiArrowLeft} from "react-icons/fi";

import './styles.css'
import logoImg from "../../../assets/images/logo.svg";

export default function Logon() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {

        e.preventDefault()

        const formData = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {

            const response = await api.post('ongs', formData)
            alert(`Cadastro realizado com sucesso! Seu ID de acesso: ${response.data.id}`)
            history.push( '/' )

        } catch (e) {

            alert('Erro no cadastro, tente novamente.')

        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas encontrarem os casos sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                    <input
                        placeholder="Whastapp"
                        value={whatsapp}
                        onChange={({target}) => setWhatsapp(target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={({target}) => setCity(target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{width: 80}}
                            value={uf}
                            onChange={({target}) => setUf(target.value)}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
