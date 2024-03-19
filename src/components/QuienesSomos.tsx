import { useEffect, useRef } from "react";
import styles from "./QuienesSomos.module.scss";

function QuienesSomos() {
	const img = useRef(null);

	const imgObserver = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			(img.current! as HTMLImageElement).classList.add(styles.imgAnimation);
		}
	}, { root: null, threshold: 0.5 });

	useEffect(() => {
		imgObserver.observe(img.current! as HTMLImageElement);
	});

	return (
		<div className={styles.mainContainer}>

			<h1 className={styles.h1Header}>
				Quiénes Somos
			</h1>

			<div className={styles.block1}>
				<div className={styles.block1Text}>
					<p className={`${styles.paragraph} ${styles.p1}`}>
						Somos un equipo de <span>profesionales freelance</span>, dedicados al desarrollo de proyectos y estudios en el ámbito de las instalaciones en Edificación desde hace <span>más de 20 años</span>.
					</p>

					<p className={`${styles.paragraph} ${styles.p2}`}>
						Nuestra amplia experiencia y el compromiso con nuestros clientes, basado en una <span>atención personalizada</span> y una comunicación fluida, garantiza las mejores soluciones para las necesidades de cada Proyecto.
					</p>

					<p className={`${styles.paragraph} ${styles.p3}`}>
						Trabajamos habitualmente con estudios de <span>Arquitectura, Constructoras y Promotoras</span>, colaborando también con otras empresas de ingeniería que necesitan en ciertos proyectos complementar su equipo de trabajo. Nuestros servicios se centran principalmente en la elaboración de informes o asistencia técnica, Proyectos Básicos y de Ejecución de instalaciones:
					</p>
				</div>

				<div className={styles.block1ImgContainer}></div>
			</div>

			<div className={styles.bulletsContainer}>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/bulb_light_color.png"></img>
					</div>

					<p>
						Electricidad, iluminación e instalaciones fotovoltaicas.
					</p>
				</div>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/camera_color.png"></img>
					</div>

					<p>
						Infraestructuras de voz y datos, seguridad, control de accesos, megafonía.
					</p>
				</div>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/climate_color.png"></img>
					</div>

					<p>
						Climatización, Extracción (garajes, aseos, vestuarios, etc) y Ventilación primaria (HVAC)
					</p>
				</div>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/tub_color.png"></img>
					</div>

					<p>
						Fontanería y Saneamiento.
					</p>
				</div>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/swimming_pool_color.png"></img>
					</div>

					<p>
						Piscinas, instalaciones de riego.
					</p>
				</div>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/fire_color.png"></img>
					</div>

					<p>
						Estudios de sectorización, evacuación e instalaciones de protección contra incendios (detección, extinción).
					</p>
				</div>

				<div className={styles.bullet}>
					<div className={styles.iconFrame}>
						<img alt="" src="icons/control_color.png"></img>
					</div>

					<p>
						Control y gestión centralizada.
					</p>
				</div>
			</div>

			<div className={styles.block2}>
				<div className={styles.block2ImgContainer} ref={img}></div>

				<div className={styles.block2Text}>
					<p className={`${styles.paragraph} ${styles.p4}`}>
						Nuestro trabajo comienza <span>acompañando al cliente</span> en fase de Anteproyecto, analizando las necesidades propias de cada Proyecto y aportando las mejores soluciones en cuestión de optimización de espacios, cumplimiento de normativa vigente, eficiencia energética y coste de las instalaciones, así como facilidad de mantenimiento de las mismas, proporcionando un <span>producto final de fácil implantación en obra</span> y minimizando la toma de decisiones en fase de construcción.
					</p>

					<p className={`${styles.paragraph} ${styles.p5}`}>
						En fase de diseño y cálculo de las instalaciones, trabajamos con las herramientas más actualizadas, <span>adaptándonos</span> a las necesidades y metodología de trabajo del cliente.
					</p>
				</div>
			</div>

		</div>
	);
}

export default QuienesSomos;
