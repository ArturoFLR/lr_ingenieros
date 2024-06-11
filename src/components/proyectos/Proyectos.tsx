import { useEffect, useRef, useState } from "react";
import ProyectCard from "./ProyectCard";
import styles from "./Proyectos.module.scss";
import SlideshowMini from "./SlideshowMini";
import { useLocation } from "react-router-dom";

type SlideShowStateType = "show" | "hide";

function Proyectos() {
	const [slideShowState, setSlideShowState] = useState<SlideShowStateType>("hide");
	const proyectSentInfo = useLocation();
	const showSentProyectInfo = useRef(true);

	const slideshowImages = useRef<string[]>([]);
	const slideshowTitle = useRef<string>("");
	const slideshowEmployer = useRef<string>("");

	const header1 = useRef(null);
	const header2 = useRef(null);
	const header3 = useRef(null);
	const header4 = useRef(null);
	const header5 = useRef(null);
	const header6 = useRef(null);

	const imgObserver1 = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				(header1.current! as HTMLHeadingElement).classList.add(styles.animatedH3Header);
			}
		},
		{ root: null, threshold: 0 }
	);

	const imgObserver2 = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				(header2.current! as HTMLHeadingElement).classList.add(styles.animatedH3Header);
			}
		},
		{ root: null, threshold: 0 }
	);

	const imgObserver3 = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				(header3.current! as HTMLHeadingElement).classList.add(styles.animatedH3Header);
			}
		},
		{ root: null, threshold: 0 }
	);

	const imgObserver4 = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				(header4.current! as HTMLHeadingElement).classList.add(styles.animatedH3Header);
			}
		},
		{ root: null, threshold: 0 }
	);

	const imgObserver5 = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				(header5.current! as HTMLHeadingElement).classList.add(styles.animatedH3Header);
			}
		},
		{ root: null, threshold: 0 }
	);

	const imgObserver6 = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				(header6.current! as HTMLHeadingElement).classList.add(styles.animatedH3Header);
			}
		},
		{ root: null, threshold: 0 }
	);

	function showSlideshow(images: string[], title: string, employer: string) {
		slideshowImages.current = images;
		slideshowTitle.current = title;
		slideshowEmployer.current = employer;

		setSlideShowState("show");
	}

	function hideSlideshow() {
		setSlideShowState("hide");
	}

	useEffect(() => {
		imgObserver1.observe(header1.current! as HTMLHeadingElement);
		imgObserver2.observe(header2.current! as HTMLHeadingElement);
		imgObserver3.observe(header3.current! as HTMLHeadingElement);
		imgObserver4.observe(header4.current! as HTMLHeadingElement);
		imgObserver5.observe(header5.current! as HTMLHeadingElement);
		imgObserver6.observe(header6.current! as HTMLHeadingElement);
	});

	useEffect(() => {
		if (proyectSentInfo.state && showSentProyectInfo.current) {
			showSlideshow(proyectSentInfo.state.imageUrl, proyectSentInfo.state.caption1, proyectSentInfo.state.caption2);
		}
	}, []);

	return (
		<div className={styles.mainContainer}>
			{slideShowState === "show" && (
				<SlideshowMini
					images={slideshowImages.current}
					title={slideshowTitle.current}
					employer={slideshowEmployer.current}
					handleClose={hideSlideshow}
				/>
			)}

			<h1 className={styles.h1Header}>Proyectos</h1>

			<h2 className={styles.h2Header}>Presentamos algunos Proyectos representativos de nuestro trabajo:</h2>

			<h3 className={`${styles.h3Header} ${styles.h3HeaderFirst}`} ref={header1}>
				Edificación Singular
			</h3>

			<div className={styles.proyectCardContainer}>
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/edificacion_singular/bodega_sm_valdeiglesias/bodega-sm-valdeiglesias-01.jpg"]}
						title="Proyecto de Actividad de Bodega en San Martín de Valdeiglesias, Madrid"
						employer="Urbano Ingenieros"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-01.png",
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-02.png",
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-03.png",
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-04.png"
						]}
						title="Nueva Junta Municipal de Puente de Vallecas"
						employer="LKS - Ayuntamiento de Madrid"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/edificacion_singular/alto_horno_sestao/alto-horno-sestao-01.png"]}
						title="Restauración del Alto Horno de Sestao"
						employer="ATC Proyecta - Sestao Berri S.A.M.P."
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/edificio_oficinas_asturias/edificio-oficinas-asturias-01.png",
							"img/projects/edificacion_singular/edificio_oficinas_asturias/edificio-oficinas-asturias-02.jpg",
							"img/projects/edificacion_singular/edificio_oficinas_asturias/edificio-oficinas-asturias-03.jpg",
							"img/projects/edificacion_singular/edificio_oficinas_asturias/edificio-oficinas-asturias-04.jpg"
						]}
						title="Rehabilitación Integral de un Edificio de Oficinas y Compresores en Pozo Carrio, Laviana (Asturias)"
						employer="ATC Proyecta - Hulleras Del Norte (HUNOSA)"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/pabellones_campus_carlos_iii/pabellones-campus-carlos-iii-01.jpg"
						]}
						title="Reforma Integral de varios Pabellones de Uso Administrativo y Laboratorios en los Campus de Chamartín y Majadahonda"
						employer="Instituto de Salud Carlos III"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/edificacion_singular/unhostel_imperial_madrid/unhostel-calle-Imperial-01.jpg"]}
						title="Climatización de Establecimiento “Unhostel” en c/ Imperial, Madrid"
						employer="PROYECTA - Manzanares Arquitectos"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/polideportivo_con_piscina_vallecas/polideportivo-con-piscina-vallecas-01.png",
							"img/projects/edificacion_singular/polideportivo_con_piscina_vallecas/polideportivo-con-piscina-vallecas-02.png"
						]}
						title="Polideportivo con Piscina Cubierta Cerro Cabezuelo, Puente de Vallecas, Madrid"
						employer="SERYNCO Ingenieros - LKS - Ayuntamiento de Madrid"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/edificacion_singular/tac_veterinario_madrid/tac-veterinario-madrid-01.jpg"]}
						title="Adaptación de salas existentes para la Instalación de un TAC en el Hospital Clínico Veterinario"
						employer="Universidad Complutense de Madrid"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/sede_repsol_mostoles_mendez_alvaro/sede-repsol-mostoles-mendez-alvaro-01.jpg"
						]}
						title="Proyectos Legalización de Climatización de las Sedes REPSOL Móstoles y Méndez Álvaro"
						employer="P.A. Ingeniería"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/climatizacion_centro_comercial_valdemoro/climatizacion-centro-comercial-valdemoro-01.jpg"
						]}
						title="Proyecto Climatización Centro Comercial en Valdemoro"
						employer="P.A. Ingeniería"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/edificacion_singular/local_ensayo_prado_overa/local-ensayo-prado-overa-01.jpg"]}
						title="Rehabilitación Edificio Industrial para Locales de Ensayo en el Polígono Prado Overa, Madrid"
						employer="José Enrique Royo (Arquitecto)"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/edificacion_singular/nave_verdecora_majadahonda/nave-verdecora-majadahonda-01.jpg"]}
						title="Proyecto Climatización de varias tiendas en Madrid y Nave Comercial de Verdecora en Majadahonda"
						employer="Ingpamer"
						handleClick={showSlideshow}
					/>
				</div>
			</div>

			<h3 className={styles.h3Header} ref={header2}>
				Viviendas Sector Público
			</h3>

			<div className={styles.proyectCardContainer}>
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_sector_publico/viviendas_valdelasfuentes/viviendas-valdelasfuentes-01.jpg",
							"img/projects/viviendas_sector_publico/viviendas_valdelasfuentes/viviendas-valdelasfuentes-02.jpg",
							"img/projects/viviendas_sector_publico/viviendas_valdelasfuentes/viviendas-valdelasfuentes-03.jpg"
						]}
						title="36 Viviendas y Garaje en el Plan Parcial Valdelasfuentes, Alcobendas"
						employer="Intecsa-Inarsa - Empresa Municipal de la Vivienda de Alcobendas (EMVIALSA)"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_sector_publico/viviendas_leganes/viviendas-leganes-01.jpg",
							"img/projects/viviendas_sector_publico/viviendas_leganes/viviendas-leganes-02.jpg"
						]}
						title="3 Edificios de 108 Viviendas VPP, garajes y trasteros en “Puerta de Fuenlabrada”, Leganés, Madrid"
						employer="GYNKGO - EMSULE (Empresa Municipal del Suelo de Leganés)"
						handleClick={showSlideshow}
					/>
				</div>
			</div>

			<h3 className={styles.h3Header} ref={header3}>
				Viviendas Sector Privado
			</h3>

			<div className={styles.proyectCardContainer}>
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_sector_privado/viviendas_ue_124_arganda_del_rey/viviendas-ue-124-arganda-01.png"
						]}
						title="108 Viviendas con Garaje y Piscina en UE-124 de Arganda del Rey"
						employer="m3 Arquitectura - CAMPORROSSO"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_sector_privado/73_viviendas_san_sebastian_arjusa/73-viviendas-san-sebastian-arjusa-01.jpg"
						]}
						title="Proyecto y Dirección de Obra 73 viviendas, garajes, trasteros y urbanización con piscina en Tempranales, San Sebastián de los Reyes, Madrid"
						employer="Intecsa-Inarsa - ARJUSA"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_sector_privado/viviendas_alcala_torrejon/viviendas-alcala-torrejon-01.jpg",
							"img/projects/viviendas_sector_privado/viviendas_alcala_torrejon/viviendas-alcala-torrejon-02.jpg"
						]}
						title="Más de 10 Edificios de viviendas, garajes, trasteros y urbanización con piscina en Alcalá de Henares y Torrejón de Ardoz"
						employer="m3 Arquitectura - CAMPORROSSO"
						handleClick={showSlideshow}
					/>
				</div>
			</div>

			<h3 className={styles.h3Header} ref={header4}>
				Viviendas Unifamiliares
			</h3>

			<div className={styles.proyectCardContainer}>
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_unifamiliares_lujo/viviendas_unifamiliares_pozuelo/vivienda-unifamiliar-pozuelo-01.jpg",
							"img/projects/viviendas_unifamiliares_lujo/viviendas_unifamiliares_pozuelo/vivienda-unifamiliar-pozuelo-02.jpg"
						]}
						title="Viviendas Unifamiliares en Pozuelo de Alarcón, Madrid"
						employer="m3 Arquitectura - CAMPORROSSO"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_unifamiliares_lujo/viviendas_unifamiliares_villaviciosa_odon/viviendas-unifamiliares-villaviciosa-odon-01.png",
							"img/projects/viviendas_unifamiliares_lujo/viviendas_unifamiliares_villaviciosa_odon/viviendas-unifamiliares-villaviciosa-odon-02.jpg"
						]}
						title="Viviendas Unifamiliares y jardín con piscina en Villaviciosa de Odón, Madrid"
						employer="SANCO-ARPA, Arquitectura y Urbanismo"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/viviendas_unifamiliares_lujo/4_viviendas_campo_real/4-viviendas-campo-real-01.jpg"]}
						title="4 Viviendas Unifamiliares con urbanización con piscina en Campo Real, Madrid"
						employer="m3 Arquitectura"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_unifamiliares_lujo/viviendas_unifamiliares_toledo_espinar_velilla/viviendas-unifamiliares-toledo-espinar-velilla-01.jpg"
						]}
						title="Diversas Viviendas Unifamiliares en Toledo, El Espinar, Velilla de San Antonio y Villalbilla"
						employer="ARYUARQUITECTOS"
						handleClick={showSlideshow}
					/>
				</div>
			</div>

			<h3 className={styles.h3Header} ref={header5}>
				Informes Periciales
			</h3>

			<div className={styles.proyectCardContainer}>
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/informes_periciales/hospital_univ_toledo/hospital-universitario-toledo-01.jpg"]}
						title="Informe sobre el Estado Final de las Instalaciones del Nuevo Hospital Universitario de Toledo"
						employer="ATC Proyecta – UTE ACCIONA-DRAGADOS-OHL"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/informes_periciales/polideportivo_faustina_valladolid/polideportivo-faustina-valladolid-01.jpg"
						]}
						title="Subsanación de Patologías en el Centro Deportivo Municipal Faustina Valladolid, Valdebernardo"
						employer="Ayuntamiento de Madrid"
						handleClick={showSlideshow}
					/>
				</div>
			</div>

			<h3 className={styles.h3Header} ref={header6}>
				Informes Técnicos sobre Riesgos y Optimización de Proyectos
			</h3>

			<div className={styles.proyectCardContainer}>
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/informes_riesgos_optimizacion/viviendas_valencia/viviendas-valencia-01.jpg"]}
						title="152 Viviendas con urbanización, local social, gimnasio y piscina en Valencia"
						employer="Zeroaplus - METROVACESA"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/projects/informes_riesgos_optimizacion/viviendas_sevilla/viviendas-sevilla-01.jpg"]}
						title="114 viviendas, locales comerciales y garaje en Palmas Altas Sur, Sevilla"
						employer="Zeroaplus - METROVACESA"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/no-image-logo.jpg"]}
						title="Hospital de Subagudos en Eibar "
						employer="Zeroaplus"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/no-image-logo.jpg"]}
						title="Hotel IBIS, Madrid"
						employer="Zeroaplus"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/no-image-logo.jpg"]}
						title="Ampliación del Colegio Jesús-María, Madrid"
						employer="Zeroaplus"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/no-image-logo.jpg"]}
						title="Más de 80 edificios de viviendas a nivel nacional"
						employer="Zeroaplus"
						handleClick={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={["img/no-image-logo.jpg"]}
						title="86 Viviendas VPPA, garajes, trasteros y locales en el Desarrollo del Este, El Cañaveral, Madrid"
						employer="ATC Proyecta – Empresa Municipal de la Vivienda y Suelo de Madrid"
						handleClick={showSlideshow}
					/>
				</div>
			</div>
		</div>
	);
}

export default Proyectos;
