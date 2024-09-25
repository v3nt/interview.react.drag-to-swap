import Head from "next/head";
import PrintPage from "../components/printPage";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { originalPagesAndImages } from "../content/appDefaultContent";

const PageHeader = styled.div`
	width: 600px;
	margin: auto;
	border-bottom: 1px solid #e4e4e4;
	margin-bottom: 42px;
	padding-bottom: 24px;

	h1 {
		font-weight: 700;
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 0.36px;
		color: #585858;
		margin-bottom: 8px;
	}

	p {
		color: #797979;
		margin: 0;
	}
`;

export default function Testpage() {
	const [pagesAndImages, setPagesAndImages] = useState(originalPagesAndImages);
	const [swapWith, setSwapWith] = useState([]);
	const [swapIndex, setSwapIndex] = useState([]);

	const handleSwapItems = (a) => {
		const selectedImage = pagesAndImages[a[0]].images[a[1]];

		if (swapWith.length === 0) {
			setSwapWith([selectedImage]);
			setSwapIndex([a]);
		} else if (swapWith.length === 1) {
			setSwapWith([...swapWith, selectedImage]);
			setSwapIndex([...swapIndex, a]);
		}
	};

	useEffect(() => {
		if (swapWith.length === 2) {
			console.log("pagesAndImages", pagesAndImages);
			swapImagesInData();
		}
	}, [swapWith]);

	const swapImagesInData = () => {
		const updatedImageLocations = pagesAndImages.map((page, pageIndex) => {
			console.log("pageIndex", pageIndex, swapIndex[0][0], swapIndex[1][0]);
			console.log("swapIndex", swapIndex);
			//  && pageIndex !== swapIndex[1][0]
			//  && pageIndex !== swapIndex[0][0]
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

		console.log(updatedImageLocations);
		setPagesAndImages((pagesAndImages) => {
			return [...updatedImageLocations];
		});

		setSwapWith([]);
		setSwapIndex([]);
	};

	return (
		<div>
			<Head>
				<title>Test Page | Popsa.com</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PageHeader>
				<h1>Trip to the Beach</h1>
				<p>Hardback Photobook last edited on Thursday 13 April 2022 at 16:28</p>
			</PageHeader>

			<PrintPage onHandleSwapItems={handleSwapItems} data={pagesAndImages} />
		</div>
	);
}
