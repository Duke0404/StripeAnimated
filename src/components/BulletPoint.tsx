import styled from "styled-components"

import check from "../images/check.svg"
import add from "../images/add.svg"

interface BulletPointProps {
	id: number
	children: string
	title: string
	changeActive: (id: number) => void
	active: boolean
}

const Bullet = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	&:hover {
		opacity: 0.75;
	}
`

const BulletText = styled.div`
	display: flex;
	flex-direction: column;
`

const BulletTitle = styled.h2`
	font-weight: bold;
	font-size: 1rem;
	color: #fff;
	margin-bottom: 0.25rem;
`

const BulletSubTitle = styled.span`
	color: #adbdcc;
	@media (max-width: 1000px) {
		display: none;
	}
`

const BulletPoint = ({
	id,
	children,
	title,
	changeActive,
	active
}: BulletPointProps) => (
	<div
		onClick={() => changeActive(id)}
	>
		<Bullet>
			{active ? (
				<img
					src={check}
					alt="check"
				/>
			) : (
				<img
					src={add}
					alt="add"
				/>
			)}
			<BulletText>
				<BulletTitle>{title}</BulletTitle>
				<BulletSubTitle>{children}</BulletSubTitle>
			</BulletText>
		</Bullet>
	</div>
)

export default BulletPoint
