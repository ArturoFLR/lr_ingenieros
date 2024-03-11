import styles from "./Contacto.module.scss";

function Contacto() {
	return (
		<div className={styles.mainContainer}>

			<div className={`${styles.frame} ${styles.frameBgAnimation}`}>
				<h1 className={`${styles.header} ${styles.textAnimation}`}>Solicita Tu Presupuesto</h1>

				<h2 className={`${styles.subHeader} ${styles.textAnimation}`}>Escríbenos y contactaremos contigo a la mayor brevedad</h2>

				<p className={`${styles.mailParagraph} ${styles.textAnimation}`}>
					<a className={styles.mailLink} href="mailto:info@l&r-ingenieros.com">rl.rubio.lopez@gmail.com</a>
				</p>

				<img className={`${styles.lineLatLeft} ${styles.lineLatAnimation}`} src="backgrounds/lineVertic.png" alt=""></img>
				<img className={`${styles.lineLatRight} ${styles.lineLatAnimation}`} src="backgrounds/lineVertic.png" alt=""></img>
				<img className={`${styles.lineSuper} ${styles.lineSuperInferAnimation}`} src="backgrounds/lineHoriz.png" alt=""></img>
				<img className={`${styles.lineInfer} ${styles.lineSuperInferAnimation}`} src="backgrounds/lineHoriz.png" alt=""></img>
			</div>

		</div>
	);
}

export default Contacto;
