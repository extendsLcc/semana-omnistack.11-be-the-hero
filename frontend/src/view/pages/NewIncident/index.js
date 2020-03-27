import React from 'react';
import {Link} from 'react-router-dom'

import {FiArrowLeft} from "react-icons/fi";

import './styles.css'
import logoImg from "../../../assets/images/logo.svg";

export default function NewIncident() {
    console.log( 'is running');
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
                <form>

                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}