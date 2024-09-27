import { useState, useEffect } from "react";

const useSwapImage = (originalPagesAndImages) => {
	const [pagesAndImages, setPagesAndImages] = useState(originalPagesAndImages);
	const [swapWith, setSwapWith] = useState([]);
	const [swapIndex, setSwapIndex] = useState([]);
	const [isDropperVisible, setIsDropperVisible] = useState(false);

	const swapItems = (item) => {
		const selectedImage = pagesAndImages[item[0]].images[item[1]];
		selectedImage.selected = true;

		setIsDropperVisible(true);

		if (swapWith.length === 0 && swapWith[0] !== selectedImage.src) {
			setSwapWith([selectedImage.src]);
			setSwapIndex([item]);
		}
	};

	const swapItemsOnRelease = (item) => {
		const targetImage = pagesAndImages[item[0]].images[item[1]];

		if (targetImage.src !== swapWith[0]) {
			setSwapWith([...swapWith, targetImage.src]);
			setSwapIndex([...swapIndex, item]);

			targetImage.target = true;
		} else {
			setIsDropperVisible(false);
		}
	};

	useEffect(() => {
		// only works with 2 images so reset ready for next swap
		if (swapWith.length === 2) {
			swapImagesInData();
			setIsDropperVisible(false);
		}
	}, [swapWith]);

	const swapImagesInData = () => {
		const updatedImageLocations = pagesAndImages.map((page) => {
			const images = page.images.map((image) => {
				const newSrc = (image) => {
					if (image.src == swapWith[1]) {
						return { ...image, src: swapWith[0], selected: false };
					} else if (image.src == swapWith[0]) {
						return { ...image, src: swapWith[1], selected: false };
					} else {
						return image;
					}
				};

				return newSrc(image);
			});
			return { ...page, images };
		});

		setPagesAndImages(() => {
			return [...updatedImageLocations];
		});

		setSwapWith([]);
		setSwapIndex([]);
	};

	return {
		swapItems,
		pagesAndImages,
		isDropperVisible,
		swapWith,
		swapItemsOnRelease,
	};
};

export default useSwapImage;
