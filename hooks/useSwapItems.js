import { useState, useEffect } from "react";

const useSwapImage = (originalPagesAndImages) => {
	const [pagesAndImages, setPagesAndImages] = useState(originalPagesAndImages);
	const [swapWith, setSwapWith] = useState([]);
	const [swapIndex, setSwapIndex] = useState([]);
	const [isDropperVisible, setIsDropperVisible] = useState(false);

	const swapItems = (item) => {
		const selectedImage = pagesAndImages[item[0]].images[item[1]].src;
		setIsDropperVisible(true);

		if (swapWith.length === 0 && swapWith[0] !== selectedImage) {
			setSwapWith([selectedImage]);
			setSwapIndex([item]);
		}
	};

	const swapItemsOnRelease = (item) => {
		const selectedImage = pagesAndImages[item[0]].images[item[1]].src;
		if (selectedImage !== swapWith[0]) {
			setSwapWith([...swapWith, selectedImage]);
			setSwapIndex([...swapIndex, item]);
		} else {
			// setSwapWith([]);
			setIsDropperVisible(false);
		}
	};

	useEffect(() => {
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
						return { ...image, src: swapWith[0] };
					} else if (image.src == swapWith[0]) {
						return { ...image, src: swapWith[1] };
					} else {
						return image;
					}
				};

				return newSrc(image);
			});
			console.log("images", images);
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
