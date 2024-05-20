import { useEffect, useRef } from "react";
import styles from "./Presentation.module.scss";

function Presentation() {

	const iconsContainer = useRef(null);
	const iconsTexts = useRef<NodeListOf<Element> | null>(null);	// Este useRef lo estamos usando para guardar una variable, ya que quiero seleccionar 3 párrafos, pero sólo toma el valor del último elemento con el atributo "ref= iconsTexts". Ignora los otros 2. Por tanto, le asigno yo un array de elementos como valor desde useEffect.
	const iconsFrames = useRef<NodeListOf<Element> | null>(null);

	//Observador para activar animaciones CSS cuando se llega al elemento mediante scroll
	const iconsContainerObserver = new IntersectionObserver((entries) => {
		const iconsTextsArray = Array.from(iconsTexts.current as NodeListOf<Element>);
		const iconsFramesArray = Array.from(iconsFrames.current as NodeListOf<Element>);

		if (entries[0].isIntersecting) {
			(iconsContainer.current! as HTMLDivElement).classList.add(styles.iconsContainerAnimation);

			iconsTextsArray.map((element) => {
				element.classList.add(styles.iconTextsAnimation);
			});

			iconsFramesArray.map((element) => {
				element.classList.add(styles.iconFrameAnimation);
			});
		}
	}, { root: null });

	//El elemento a observar por el Observador debe definirse aquí, ya que hasta que la página no ha cargado por completo iconsContainer.current no contiene nada (null)
	useEffect(() => {
		iconsTexts.current = document.querySelectorAll(`.${styles.iconsContainer} p`);
		iconsFrames.current = document.querySelectorAll(`.${styles.iconFrame}`);
		iconsContainerObserver.observe(iconsContainer.current! as HTMLDivElement);
	}, []);

	return (
		<div className={styles.mainContainer}>

			<div className={styles.textContainer}>
				<h1 className={styles.mainParagraph}>
					<span className={styles.brand}>L & R Ingenieros</span> te ofrece las soluciones a tus Proyectos de Instalaciones en Edificiación.
				</h1>
				<p className={styles.mainParagraph}>Desde la fase de <span>Anteproyecto</span> hasta la Asistencia Técnica en obra, te acompañamos en el diseño de tu Edificio hasta alcanzar los objetivos de <span>calidad y eficiencia</span> deseados.</p>
				<p>Tanto en edificación singular como en edificios residenciales, la <span>amplia experiencia</span> y formación de nuestros técnicos garantizarán la optimización de cada Proyecto, en cuanto a eficiencia energética, facilidad de mantenimiento, control y regulación de la energía, cumplimiento de normativa y <span>costes de implantación competitivos.</span></p>
			</div>

			<div className={styles.iconsContainer} ref={iconsContainer}>
				<div className={styles.iconFrame}>
					<img src="icons/icon_compass.svg" alt=""></img>
				</div>
				<p>Elaboración de Proyectos Básicos y de Ejecución de Instalaciones</p>

				<div className={styles.iconFrame}>
					<img src="icons/icon_direccion_obra.svg" alt=""></img>
				</div>
				<p>Asistencia Técnica en obra, informes, revisión de proyectos y auditorías</p>

				<div className={styles.iconFrame}>
					<img src="icons/icon_building1.svg" alt=""></img>
				</div>
				<p>Cubrimos todas las instalaciones necesarias en Edificación, tanto eléctricas como mecánicas</p>
			</div>

			<div className={styles.opinionsContainer}>
				<div className={styles.pictureOpinionContainer}>
					<div className={styles.pictureContainer}>
						<img src="img/gynkgo-logo.jpg" className={styles.picture} alt="Gynkgo Ingenieros"></img>
					</div>
					<p className={styles.opinion}>
						Lo mejor de L&R es el trato cercano y la facilidad de hacer equipo para disfrutar el proceso de hacer un buen proyecto.
					</p>
				</div>

				<div className={`${styles.pictureOpinionContainer} ${styles.pictureOpinionContainer2}`}>
					<div className={styles.pictureContainer}>
						<img src="img/zeroaplus-logo.jpg" className={styles.picture} alt="Zeroaplus Consultoria e Ingenieria"></img>
					</div>
					<p className={styles.opinion}>
						Más de 200 informes de consultoría técnica realizados con ellos y con ganas de seguir colaborando en muchos más.
					</p>
				</div>

				<div className={`${styles.pictureOpinionContainer} ${styles.pictureOpinionContainer3}`}>
					<div className={styles.pictureContainer}>
						<img src="img/proyecta-logo.jpg" className={styles.picture} alt="Proyecta! Servicios de Ingeniería"></img>
					</div>
					<p className={styles.opinion}>
						Llevamos más de 15 años trabajando juntos en todo tipo de proyectos y direcciones de obra, somos como un gran equipo.
					</p>
				</div>
			</div>

		</div>
	);
}

export default Presentation;
