import styled from "styled-components"

const SmallTitle = styled.span`
	font-weight: bold;
	color: #ffce48;
`

const LargeTitle = styled.h1`
	font-weight: bold;
	font-size: 2rem;
`

const Features = () => (
	<div>
		<SmallTitle>Granular control</SmallTitle>
		<LargeTitle>Effortlessly design and test pricing plans</LargeTitle>
	</div>
)

export default Features
