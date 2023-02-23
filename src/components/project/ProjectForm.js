import { useState } from 'react'

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [project, setProject] = useState(projectData || {})

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)

    };

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto:"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="text"
                text="Logo do Projeto:"
                name="logo"
                placeholder="Insira o link da logo do projeto"
                handleOnChange={handleChange}
                value={project.logo ? project.logo : ''}
            />
            <Input
                type="text"
                text="Link do Projeto:"
                name="link"
                placeholder="Insira o link da logo do projeto"
                handleOnChange={handleChange}
                value={project.link ? project.link : ''}
            />
            <Input
                type="text"
                text="Pitch do Projeto:"
                name="pitch"
                placeholder="Insira o pitch do projeto"
                handleOnChange={handleChange}
                value={project.pitch ? project.pitch : ''}
            />
            <Input
                type="number"
                text="Número do grupo:"
                name="numero"
                placeholder="Insira o número do seu grupo"
                handleOnChange={handleChange}
                value={project.numero ? project.numero : ''}
            />
            <Input
                type="text"
                text="Informações do grupo:"
                name="grupo"
                placeholder="Insira mais informações sobre o grupo"
                handleOnChange={handleChange}
                value={project.grupo ? project.grupo : ''}
            />
            <Input
                type="text"
                text="Descrição da turma:"
                name="turma"
                placeholder="Insira a descrição da turma"
                handleOnChange={handleChange}
                value={project.turma ? project.turma : ''}
            />
            
            <Input
                type="text"
                text="A turma está ativa?"
                name="ativa"
                placeholder="Insira se a turma está ativa ou não"
                handleOnChange={handleChange}
                
                value={project.ativa? project.ativa : ''}
            />
       
            <SubmitButton text={btnText} />




        </form>
    )
}

export default ProjectForm;

