import { useEffect, useRef } from "react";
import styles from "./Presentation.module.scss";

function Presentation() {

	const iconsContainer = useRef(null);
	const iconsTexts = useRef(null);	// Este useRef lo estamos usando para guardar una variable, ya que quiero seleccionar 3 párrafos, pero sólo toma el valor del último elemento con el atributo "ref= iconsTexts". Ignora los otros 2. Por tanto, le asigno yo un array de elementos como valor desde useEffect.
	const iconsFrames = useRef(null);

	//Observador para activar animaciones CSS cuando se llega al elemento mediante scroll
	const iconsContainerObserver = new IntersectionObserver( (entries) => {
		const iconsTextsArray = Array.from(iconsTexts.current);
		const iconsFramesArray = Array.from(iconsFrames.current);

		if (entries[0].isIntersecting) {
			iconsContainer.current.classList.add(styles.iconsContainerAnimation);

			iconsTextsArray.map( (element) => {
				element.classList.add(styles.iconTextsAnimation);
			});

			iconsFramesArray.map( (element) => {
				element.classList.add(styles.iconFrameAnimation);
			});
		}else {
			iconsContainer.current.classList.remove(styles.iconsContainerAnimation);
			iconsTextsArray.map( (element) => {
				element.classList.remove(styles.iconTextsAnimation);
			});
			iconsFramesArray.map( (element) => {
				element.classList.remove(styles.iconFrameAnimation);
			});

		}
	}, {root: null});

	//El elemento a observar por el Observador debe definirse aquí, ya que hasta que la página no ha cargado por completo iconsContainer.current no contiene nada (null)
	useEffect( () => {
		iconsTexts.current = document.querySelectorAll(`.${styles.iconsContainer} p`);
		iconsFrames.current = document.querySelectorAll(`.${styles.iconFrame}`);
		iconsContainerObserver.observe(iconsContainer.current);
	}, []);

	return (
		<div className={styles.mainContainer}>

			<div className={styles.textContainer}>
				<h1 className={styles.mainParagraph}>
					<span className={styles.brand}>L & R Servicios de Ingeniería</span>, señora, diseña hoteles, centrales nucleares, sillones, mecedoras, descalzadoras... en la puerta de su propio domicio.
				</h1>
				<p className={styles.mainParagraph}>Somos una empresa comprometida con la <span>conciliación familiar</span>, gestionando sus más importantes proyectos desde el salón de nuestra casa, mientras hacemos la comida o vemos a Ana Rosa.</p>
				<p>Utilizamos las últimas tecnologías de cálculo y diseño <span>disponibles en el Emule</span>. Si nuestro proyecto le da algún error de licencia, ¡llámenos!</p>
			</div>

			<div className={styles.iconsContainer} ref={iconsContainer}>
				<div className={styles.iconFrame}>
					<img src="icons/icon_compass.svg" alt=""></img>
				</div>
				<p>Ahora con un rasca y gana en todos nuestros planos </p>

				<div className={styles.iconFrame}>
					<img src="icons/icon_direccion_obra.svg" alt=""></img>
				</div>
				<p>Estamos presentes durante la obra, para ver si nos dan algo</p>

				<div className={styles.iconFrame}>
					<img src="icons/icon_building1.svg" alt=""></img>
				</div>
				<p>Garantizamos que el edificio sigue en pie durante 2 años</p>
			</div>

			<div className={styles.opinionsContainer}>
				<div className={styles.pictureOpinionContainer}>
					<div className={styles.pictureContainer}>
						<img src="img/maricon&tontico.jpg" className={styles.picture} alt="Maricón y Tontico"></img>
					</div>
					<p className={styles.opinion}>
						Lourdes y Rafa son muy buenos; nunca nos han mordido.
					</p>
				</div>

				<div className={styles.pictureOpinionContainer}>
					<div className={styles.pictureContainer}>
						<img src="img/L&R.jpg" className={styles.picture} alt="Lourdes y Rafa"></img>
					</div>
					<p className={styles.opinion}>
						Estate tranquilo. ¡Tontos no somos!
					</p>
				</div>
			</div>

		</div>
	);
}

export default Presentation;
