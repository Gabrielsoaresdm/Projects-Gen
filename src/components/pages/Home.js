import styles from './Home.module.css'
import robo from '../../img/robo.png'
import LinkButtom from '../layout/LinkButton';


function Home() {
    return (<>
        <section className={styles.home_container}>
            <div className={styles.letter}>
                <h1>
                    Bem-vindo a GenProjects!
                </h1>
                <p>Aqui você poderá ver todos os Projetos Integradores
                    da Generation Brasil e gerenciar o do seu grupo.</p>

                <div className={styles.bbt}>
                    <LinkButtom to="/projects" text="Explorar" />
                    <LinkButtom to="/newproject" text="Adicionar Projeto" />
                </div>


            </div>
            <img src={robo} className={styles.robo} alt='robo' />



        </section>



    </>

    )
}

export default Home;