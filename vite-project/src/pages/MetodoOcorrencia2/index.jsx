import React from 'react';
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow"
import "./style.css";
import { Link } from 'react-router-dom';

function MetodoOcorrencias2() {

    const showCheck = () => {
        const pickChecks = document.getElementsByClassName("checkboxPE");
        const containerCompanions = document.getElementsByClassName("containerSelect");

        for (let i = 0; i < pickChecks.length; i++) {
            if (pickChecks[i].checked) {
                containerCompanions[i].style.display = "flex";
            } else {
                containerCompanions[i].style.display = "none";
            }
        }
    }

    return (
        <>
            <div className="metPEPage">
                <div className="metOcorreTitle">
                    <Arrow />
                    <MenuButtonO />
                </div>
                <div className="tarjaV">
                    <div className="metTitle">
                        <h1>Problemas Encontrados</h1>
                    </div>
                </div>

                <div className="PEContainercampo ">
                    <div className='containerPE'>
                        <Checkbox titulo="Psiquiátrico " style={{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='containerPE'>
                        <Checkbox titulo="Respiratório " className="checkboxPE" onClick={showCheck} style={{ width: '25px', height: '25px' }} />
                        <div className="containerSelect" style={{ display: "none" }}>
                            <select style={{ width: '100px', height: '25px', marginLeft: "40px" }}>
                                <option value="">Selecione uma opção</option>
                                <option value="opcao1">DPOC</option>
                                <option value="opcao2">Inalação fumaça</option>
                            </select>
                        </div>
                    </div>
                    <div className='containerPE'>
                        <Checkbox titulo="Diabetes " className="checkboxPE" onClick={showCheck} style={{ width: '25px', height: '25px' }} />
                        <div className="containerSelect" style={{ display: "none" }}>
                            <select style={{ width: '100px', height: '25px', marginBottom: '10px', marginLeft: "40px" }}>
                                <option value="">Selecione uma opção</option>
                                <option value="opcao1">Hiperglicemia</option>
                                <option value="opcao2">Hipoglicemia</option>
                            </select>
                        </div>
                    </div>
                    <div className='containerPE' style={{ marginBottom: "30px" }}>
                        <Checkbox titulo="Obstétrico " className="checkboxPE" onClick={showCheck} style={{ width: '25px', height: '25px' }} />
                        <div className="containerSelect" style={{ display: "none" }}>
                            <select style={{ width: '100px', height: '25px', marginBottom: '10px', marginLeft: "40px" }}>
                                <option value="">Selecione a altura</option>
                                <option value="opcao1">Parto Emergencial</option>
                                <option value="opcao2">Gestante</option>
                                <option value="opcao3">Hemorr. Excessiva</option>
                            </select>
                        </div>
                    </div>
                    <span className="spanOcorrencia">Há outra ocorrência?</span>
                    <div className="inputs">
                        <InputD type={"text"} placeholder={"Digite o tipo de ocorrência"} style={{ width: '85%', height: '10px', marginBottom: '20px' }} />
                    </div>
                </div>

                <div className='areaNavigation'>
                    <Link to="/metodoOcorrencias">
                        <button className="arrowNavigation">
                            <FaArrowLeft size={55} color="#FFF" />
                        </button>
                    </Link>
                    <Link to="/metodoOcorrencias3">
                        <button className="arrowNavigation">
                            <FaArrowRight size={55} color="#FFF" />
                        </button>
                    </Link>
                </div>
            </div>






        </>


    )



}

export default MetodoOcorrencias2;