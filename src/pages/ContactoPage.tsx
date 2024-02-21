import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./ContactoPage.module.scss";

function ContactoPage() {
	return (
		<>
			<div className={styles.header}>
				<Header />
			</div>

			<main>
				<div className={styles.contacto}>
					<Contacto />
				</div>
			</main>

			<Footer />
		</>
	);
}

export default ContactoPage;
