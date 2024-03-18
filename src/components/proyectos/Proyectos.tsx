import { useRef, useState } from "react";
import ProyectCard from "./ProyectCard";
import styles from "./Proyectos.module.scss";
import SlideshowMini from "./SlideshowMini";

type SlideShowStateType = "show" | "hide";

function Proyectos() {
	const [slideShowState, setSlideShowState] = useState<SlideShowStateType>("hide");

	const slideshowImages = useRef<string[]>([]);
	const slideshowTitle = useRef<string>("");
	const slideshowEmployer = useRef<string>("");

	function showSlideshow (images: string[], title: string, employer: string) {
		slideshowImages.current = images;
		slideshowTitle.current = title;
		slideshowEmployer.current = employer;

		setSlideShowState("show");
	}

	function hideSlideshow () {
		setSlideShowState("hide");
	}

	
	return (
		<div className={styles.mainContainer}>

			{
				slideShowState === "show" && 
				<SlideshowMini images={slideshowImages.current}
					title={slideshowTitle.current}
					employer={slideshowEmployer.current}
					handleClose={hideSlideshow}
				/>
			}

			<h1 className={styles.h1Header}>
				Proyectos
			</h1>

			<h2 className={styles.h2Header}>
				Edificación Singular
			</h2>

			<div className={styles.proyectCardContainer}>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/bodega_sm_valdeiglesias/bodega-sm-valdeiglesias-01.jpg",
						]}
						title="Proyecto de Actividad de Bodega en San Martín de Valdeiglesias, Madrid"
						employer="Urbano Ingenieros"
						handleClick ={showSlideshow}
					/>
				</div>
				
				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-01.png",
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-02.png",
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-03.png",
							"img/projects/edificacion_singular/junta_puente_vallecas/junta-municipal-puente-de-vallecas-04.png",
						]}
						title="Nueva Junta Municipal de Puente de Vallecas"
						employer="LKS - Ayuntamiento de Madrid"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/alto_horno_sestao/alto-horno-sestao-01.png"
						]}
						title="Restauración del Alto Horno de Sestao"
						employer="ATC Proyecta - Sestao Berri S.A.M.P."
						handleClick ={showSlideshow}
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
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Reforma Integral de varios Pabellones de Uso Administrativo y Laboratorios en los Campus de Chamartín y Majadahonda"
						employer="Instituto de Salud Carlos III"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Climatización de Establecimiento “Unhostel” en c/ Imperial, Madrid"
						employer="PROYECTA - Manzanares Arquitectos"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/edificacion_singular/polideportivo_con_piscina_vallecas/polideportivo-con-piscina-vallecas-01.png",
							"img/projects/edificacion_singular/polideportivo_con_piscina_vallecas/polideportivo-con-piscina-vallecas-02.png"
						]}
						title="Polideportivo con Piscina Cubierta Cerro Cabezuelo, Puente de Vallecas, Ayto. de Madrid"
						employer="SERYNCO Ingenieros - LKS - Ayuntamiento de Madrid"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Proyecto Centro Socio-Cultural sobre el Mercado de Abastos de Reinosa, Cantabria"
						employer="PROYECTA - RAW"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Proyectos Legalización de Climatización de las Sedes REPSOL Móstoles y Méndez Álvaro"
						employer="P.A. Ingeniería"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Proyecto Climatización Centro Comercial en Valdemoro"
						employer="P.A. Ingeniería"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Rehabilitación Edificio Industrial para Locales de Ensayo en el Polígono Prado Overa, Madrid"
						employer="José Enrique Royo (Arquitecto)"
						handleClick ={showSlideshow}
					/>
				</div>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/no-image-logo.jpg"
						]}
						title="Proyecto Climatización de varias tiendas en Madrid y Nave Comercial de Verdecora en Majadahonda"
						employer="Ingpamer"
						handleClick ={showSlideshow}
					/>
				</div>

			</div>






			<h2 className={styles.h2Header}>
				Viviendas Sector Público
			</h2>

			<div className={styles.proyectCardContainer}>

				<div className={styles.proyectCardComponent}>
					<ProyectCard
						images={[
							"img/projects/viviendas_sector_publico/viviendas_valdelasfuentes/viviendas-valdelasfuentes-01.jpg",
							"img/projects/viviendas_sector_publico/viviendas_valdelasfuentes/viviendas-valdelasfuentes-02.jpg",
							"img/projects/viviendas_sector_publico/viviendas_valdelasfuentes/viviendas-valdelasfuentes-03.jpg"
						]}
						title="36 Viviendas y Garaje en el Plan Parcial Valdelasfuentes, Alcobendas"
						employer="Intecsa-Inarsa – Empresa Municipal de la Vivienda de Alcobendas (EMVIALSA)"
						handleClick ={showSlideshow}
					/>
				</div>

			</div>			


			<h2 className={styles.h2Header}>
				Viviendas Sector Privado
			</h2>

			<h2 className={styles.h2Header}>
				Viviendas Unifamilares de Lujo
			</h2>

			<h2 className={styles.h2Header}>
				Informes Periciales
			</h2>

			<h2 className={styles.h2Header}>
				Informes Técnicos sobre Riesgos y Optimización de Proyectos:
			</h2>

		</div>
	);
}

export default Proyectos;
