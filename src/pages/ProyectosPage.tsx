import { Helmet } from "react-helmet";
import styles from "./ProyectosPage.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Proyectos from "../components/proyectos/Proyectos";

function ProyectosPage() {
	return (
		<>
			<Helmet>
				<meta name="description" content="Algunos de los proyectos en los que L&R Ingenieros ha participado." />
				<title>RL Ingenieros - Proyectos</title>
			</Helmet>

			<div className={styles.header}>
				<Header />
			</div>

			<main className={styles.mainLabel}>
				<Proyectos />
			</main>

			<Footer />
		</>
	);
}

export default ProyectosPage;
