import styles from "./Slideshow.module.scss";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function Slideshow({images}) {
	const [mainImg, setMainImg] = useState(images[0]);		// Almacena la url y textos de la imagen seleccionada
	let imgCounter = useRef(0);								// Un contador para saber cuál es la imagen seleccionada actualmente dentro del array de imagenes
	let changeMainImgTimeout;								// Almacena el id del Timeout creado en las funciónes changePrevImg o changeNextImg

	const selectedImage = useRef(null);
	const caption1 = useRef(null);
	const caption2 = useRef(null);

	// Esta función cambia la imagen principal del slideshow. Para ello cambia la variable imgCounter de una forma u otra según el elemento que la activa (botón next, prev o un thumbnail). Luego activa la animación de fade in / fade out, cambia la imagen principal a la indicada en imgCounter y el thumbnail seleccionado, y cuando la animación ha terminado elimina las clases que contienen la animación, para que puedan volver a ser asignadas y así volver a disparar la animación en el futuro. Por último, activa el zoom y la animación de los textos en la nueva imagen. 
	function changeMainImg (event, changeType) {
		switch (changeType) {
		case "prev":
			if (imgCounter.current > 0) {
				imgCounter.current--;
			}else {
				imgCounter.current = images.length -1;
			}
			break;
		case "next":
			if (imgCounter.current < images.length - 1) {
				imgCounter.current++;
			}else {
				imgCounter.current = 0;
			}
			break;
		case "thumbnail":
			imgCounter.current = event.target.id;
		}
		
		fadeOutInImg();
		animateCaptions();
		zoomSelectedImage();

		changeMainImgTimeout = setTimeout( () => {
			setMainImg(images[imgCounter.current]);
			frameThumbnail();
			selectedImage.current.style.transform = "";
		},400);

		selectedImage.current.addEventListener("animationend", removeFadeAnimationClasses);
	}

	// Elimina las clases que activan la animación de fundido de la imagen principal y sus textos para que pueda volver a ser aplicada en el futuro. Esta función se aplica al "addEventListener" de la función changeMainImg. Se define fuera de esa función para que pueda ser utilizada por el "removeEventListener" en useEffect() (si no, estaría fuera de su ámbito).
	function removeFadeAnimationClasses() {
		selectedImage.current.classList.remove(styles.fadeOutIn);
		caption1.current.classList.remove(styles.fadeCaption);
		caption2.current.classList.remove(styles.fadeCaption);
	}

	// Anima el texto de las imágenes cuando se cambia la imagen principal con las 2 funciones anteriores
	function animateCaptions () {
		caption1.current.classList.remove(styles.captionAnimation);
		caption2.current.classList.remove(styles.caption2Animation);

		setTimeout( () => {											// Si no usamos un setTimeout antes de volver a asignar la clase con la animación, el cambio es demasiado rápido y no es detectado por React, no funciona.
			caption1.current.classList.add(styles.captionAnimation);
			caption2.current.classList.add(styles.caption2Animation);
		}, 0);
	}

	// Aplica un zoom animado a la imagen principal.
	function zoomSelectedImage () {
		selectedImage.current.classList.remove(styles.selectedImgZoomIn);
		
		setTimeout( () => {							
			selectedImage.current.classList.add(styles.selectedImgZoomIn);
		}, 0);
	}

	// Aplica un fundido "Fade-Out" y luego "Fade-In" a la imagen principal y su texto
	function fadeOutInImg () {
		const zoomLevel = getComputedStyle(selectedImage.current);
		selectedImage.current.style.transform = zoomLevel.transform;

		selectedImage.current.classList.remove(styles.fadeOutIn);
		caption1.current.classList.remove(styles.fadeCaption);
		caption2.current.classList.remove(styles.fadeCaption);

		setTimeout( () => {							
			selectedImage.current.classList.add(styles.fadeOutIn);
			caption1.current.classList.add(styles.fadeCaption);
			caption2.current.classList.add(styles.fadeCaption);
		}, 0);
	}

	// Resalta el thumbnail activo y minimiza el que deja de serlo.
	function frameThumbnail () {
		const prevSelectedThumbnail = document.getElementsByClassName(styles.thumbnailSelected);
		const newSelectedThumbnail = document.getElementById(imgCounter.current);

		prevSelectedThumbnail[0].classList.add(styles.thumbnailDeselected);
		prevSelectedThumbnail[0].classList.remove(styles.thumbnailSelected);
		newSelectedThumbnail.classList.add(styles.thumbnailSelected);	
	}

	// Renderiza los thumbnails, tantos como imágenes haya en el prop "images"
	function renderThumbnails () {
		return images.map( (element, i) => {
			return (
				<div className={`${styles.thumbnail} ${i === 0 ? styles.thumbnailSelected : ""}`} key={i} id={i}>
					<img src={element.path} alt="" id={i} onClick={(event) => changeMainImg(event, "thumbnail")}></img>
				</div>
			);
		});
	}

	//useEffect cambia la imagen automáticamente cada cierto tiempo y limpia los Timeouts.
	useEffect( () => {
		const changeImgTimeout = setTimeout( () => changeMainImg(null, "next"), 6000);
		return () => {
			clearTimeout(changeMainImgTimeout);
			clearTimeout(changeImgTimeout);
			removeEventListener("animationend", removeFadeAnimationClasses);
		};
	});

	return (
		<div className={styles.mainContainer}>
			<p className={`${styles.caption} ${styles.captionAnimation}`} ref={caption1}>{mainImg.caption}</p>
			<p className={`${styles.caption2} ${styles.caption2Animation}`} ref={caption2}>{mainImg.caption2}</p>
			<img className={`${styles.selectedImg} ${styles.selectedImgZoomIn}`} src={mainImg.path} alt="" ref={selectedImage}></img>
			<button className={styles.buttonPrev} type="button" onClick={(event) => changeMainImg(event, "prev")}>&lt;</button>
			<button className={styles.buttonNext} type="button" onClick={(event) => changeMainImg(event, "next")}>&gt;</button>
			<div className={styles.thumbnailContainer}>
				{renderThumbnails()}
			</div>
		</div>
	);
}

Slideshow.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Slideshow;

