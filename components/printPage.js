import styled from "styled-components";
import Actions from "./actions";
import Dropper from "./Dropper";
import PrintPhoto from "./PrintPhoto";

const Wrapper = styled.div`
	width: 600px;
	margin: auto;
	color: #585858;
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
`;

const PageLayout = styled.div`
	display: flex;
	flex-wrap: wrap;
	background: var(--color-blue);
	border-radius: 8px;
	padding: 20px;
	margin: 17px 0 42px;
	justify-content: space-between;
	gap: 20px;
`;

export default function PrintPage({ data, onHandleSwapItems }) {
	const handleChildEvent = (a) => {
		onHandleSwapItems(a);
	};

	return (
		<>
			<Wrapper>
				<Dropper />
				{Object.values(data).map((entry, indexPage) => {
					return (
						<PrintWrapper key={indexPage}>
							<Header>
								<Title>{entry.title}</Title>
								<Actions />
							</Header>
							<PageLayout>
								{entry.images?.map((image, indexPhoto) => {
									return (
										<PrintPhoto
											key={`${image}-${indexPhoto}`}
											src={image}
											alt={`${entry.title} - random or custom title here`}
											onHandleSwapItems={handleChildEvent}
											itemLocation={[indexPage, indexPhoto]}
										/>
									);
								})}
							</PageLayout>
						</PrintWrapper>
					);
				})}
			</Wrapper>
		</>
	);
}
