import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import api from "../../../services/api";

import {FiArrowLeft} from "react-icons/fi";

import './styles.css'
import logoImg from "../../../assets/images/logo.svg";

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem( 'ongId' );

    async function handleNewIncident(e) {

        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try{

            await api.post( 'incidents', data, {
                headers: {
                    Authorization: ongId
                }
            } );
            alert( 'Cadastro de caso realizado com sucesso!' );
            history.push( '/profile' )

        }catch (e) {

            alert('Falha ao cadastrar o caso, tente novamente.')

        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>

                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={({target}) => setTitle( target.value )}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={({target}) => setDescription( target.value )}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={({target}) => setValue( target.value )}
                    />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}