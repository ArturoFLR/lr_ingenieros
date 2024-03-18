import { useEffect, useRef, useState } from "react";
import styles from "./SlideshowMini.module.scss";

type SlideshowStateType = "iddle" | "animated"

type SlideshowMiniProps = {
	images: string[],
	title: string,
	employer: string,
	handleClose: () => void
}

function SlideshowMini({ images, title, employer, handleClose }: SlideshowMiniProps) {
	const [selectedImg, setSelectedImg] = useState(images[0]);
	const [slideshowState, setSlideShowState] = useState<SlideshowStateType>("iddle");				// Evita que podamos pulsar en los botones para cambiar entre imágenes cuando está en marcha la animación de cambio de imagen.

	const nextImgElement = useRef<HTMLDivElement | null>(null);
	const prevImgElement = useRef<HTMLDivElement | null>(null);

	let imgAnimationTimeout: number;

	const prevImg = useRef<string>("");
	const nextImg = useRef<string>("");

	// Definimos cuáles serán las imágenes previa y próxima en función cuál es la principal.

	const numberOfImages = images.length;
	const selectedImgIndex = images.findIndex( (element) => element === selectedImg);

	if (images[selectedImgIndex -1]) {
		prevImg.current = images[selectedImgIndex - 1];
	} else {
		prevImg.current = images[numberOfImages - 1];
	}

	if (images[selectedImgIndex + 1]) {
		nextImg.current = images[selectedImgIndex + 1];
	} else {
		nextImg.current = images[0];
	}



	function changeMainImg ( changeType: "next" | "prev") {
		setSlideShowState("animated");
		
		if (changeType === "next") {
			animateImgChange("next");
		} else {
			animateImgChange("prev");
		}

		imgAnimationTimeout = window.setTimeout( () => {
			switch (changeType) {
				case "next":
					if (selectedImgIndex < numberOfImages -1) {
						setSelectedImg(images[selectedImgIndex + 1]);
					} else {
						setSelectedImg(images[0]);
					}
					break;
				
				case "prev":
					if (selectedImgIndex > 0) {
						setSelectedImg(images[selectedImgIndex - 1]);
					} else {
						setSelectedImg(images[numberOfImages - 1]);
					}
					break;
	
				default:
					break;
			}

			setSlideShowState("iddle");

		}, 400);
	}

	function animateImgChange (changeType: "next" | "prev") {

		if (changeType === "next") {
			(nextImgElement.current as HTMLDivElement).classList.add(styles.nextImgAnimated);
		} else {
			(prevImgElement.current as HTMLDivElement).classList.add(styles.prevImgAnimated);
		}
	}


	useEffect( () => {
		return () => {
			clearTimeout(imgAnimationTimeout);
		};
	}, []);

	useEffect( () => {
		if (nextImgElement.current && prevImgElement.current) {
			(nextImgElement.current as HTMLDivElement).classList.remove(styles.nextImgAnimated);
			(prevImgElement.current as HTMLDivElement).classList.remove(styles.prevImgAnimated);
		}
	}, [selectedImg]);


	return (
		<div className={styles.mainContainer}>

			<div className={styles.imageContainer}>

				<div className={styles.filter}>
					
					{
						images.length > 1 && (
							<>
								<div className={styles.prevImg} ref={prevImgElement}>
									<img alt="Imagen del proyecto" src={prevImg.current} />
								</div>
							</>
						)
					}
					
					<div className={styles.mainImg}>
						<img alt="Imagen del proyecto" src={selectedImg} />
					</div>

					{
						images.length > 1 &&
							<>
								<div className={styles.nextImg} ref={nextImgElement}>
									<img alt="Imagen del proyecto" src={nextImg.current} />
								</div>

								{
									slideshowState === "iddle"
										? (
											<>
												<button className={styles.buttonPrev} type="button" onClick={() => changeMainImg("prev")} >&lt;</button>
												<button className={styles.buttonNext} type="button" onClick={() => changeMainImg("next")} >&gt;</button>
											</>
										)
										: (
											<>
												<button className={styles.buttonPrev} type="button" >&lt;</button>
												<button className={styles.buttonNext} type="button" >&gt;</button>
											</>
										)
								}

							</>
					}
				</div>

				<div role="button" className={styles.closeIcon} onClick={handleClose}>
					X
				</div>

			</div>

			<div className={styles.cardboardContainer}>
				<p className={styles.title}>{title}</p>
				<p className={styles.employer}>{employer}</p>
			</div>
		</div>
	);
}

export default SlideshowMini;
