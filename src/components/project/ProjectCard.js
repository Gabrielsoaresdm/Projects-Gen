import { Link } from 'react-router-dom';

import styles from './ProjectCard.module.css';


import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, logo, link, pitch, numero, grupo, turma, ativa, handleRemove }) {

const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
}

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Logo: </span>{logo}</p>
            <p><span>Link: </span> {link}</p>
            <p><span>Pitch: </span> {pitch}</p>
            <p><span>Número do grupo: </span> {numero}</p>
            <p><span>Informações do grupo: </span>{grupo}</p>
            <p><span>Descrição da turma: </span>{turma}</p>
            <p><span>A turma está ativa? </span>{ativa}</p>
            <div className={styles.project_card_actions}>
            <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard