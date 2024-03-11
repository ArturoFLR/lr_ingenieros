import Footer from "../components/Footer";
import Header from "../components/Header";
import QuienesSomos from "../components/QuienesSomos";
import styles from "./QuienesSomosPage.module.scss";
import { Helmet } from "react-helmet";

function QuienesSomosPage() {
	return (
		<>
			<Helmet>
				<title>RL Ingenieros - Quienes Somos</title>
			</Helmet>

			<div className={styles.header}>
				<Header />
			</div>

			<main className={styles.mainLabel}>
				<QuienesSomos />
			</main>

			<Footer />
		</>
	);
}

export default QuienesSomosPage;
