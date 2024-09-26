import { useState, useEffect } from "react";

const useSwapImage = (originalPagesAndImages) => {
	const [pagesAndImages, setPagesAndImages] = useState(originalPagesAndImages);
	const [swapWith, setSwapWith] = useState([]);
	const [swapIndex, setSwapIndex] = useState([]);

	const swapItems = (item) => {
		const selectedImage = pagesAndImages[item[0]].images[item[1]];

		if (swapWith.length === 0) {
			setSwapWith([selectedImage]);
			setSwapIndex([item]);
		} else if (swapWith.length === 1 && swapWith[0] !== selectedImage) {
			setSwapWith([...swapWith, selectedImage]);
			setSwapIndex([...swapIndex, item]);
		}
	};

	useEffect(() => {
		if (swapWith.length === 2) {
			swapImagesInData();
		}
	}, [swapWith]);

	const swapImagesInData = () => {
		const updatedImageLocations = pagesAndImages.map((page, pageIndex) => {
			const images = page.images.map((image) => {
				if (image == swapWith[1]) {
					return swapWith[0];
				} else if (image == swapWith[0]) {
					return swapWith[1];
				} else {
					return image;
				}
			});
			return { ...page, images };
		});

		setPagesAndImages((pagesAndImages) => {
			return [...updatedImageLocations];
		});

		setSwapWith([]);
		setSwapIndex([]);
	};

	return { swapItems, pagesAndImages };
};

export default useSwapImage;
