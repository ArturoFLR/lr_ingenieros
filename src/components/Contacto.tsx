import styles from "./Contacto.module.scss";

function Contacto() {
	return (
		<div className={styles.mainContainer}>
			<div className={`${styles.frame} ${styles.frameBgAnimation}`}>
				<h1 className={`${styles.header} ${styles.textAnimation}`}>Solicita tu Presupuesto</h1>
				<p className={`${styles.phoneMail} ${styles.textAnimation}`}>Tel: 914755004 - 619507056</p>
				<p className={`${styles.phoneMail} ${styles.textAnimation}`}>info@l&r-ingenieros.com</p>
				<img className={`${styles.lineLatLeft} ${styles.lineLatAnimation}`} src="backgrounds/lineVertic.png" alt=""></img>
				<img className={`${styles.lineLatRight} ${styles.lineLatAnimation}`} src="backgrounds/lineVertic.png" alt=""></img>
				<img className={`${styles.lineSuper} ${styles.lineSuperInferAnimation}`} src="backgrounds/lineHoriz.png" alt=""></img>
				<img className={`${styles.lineInfer} ${styles.lineSuperInferAnimation}`} src="backgrounds/lineHoriz.png" alt=""></img>
			</div>

		</div>
	);
}

export default Contacto;
