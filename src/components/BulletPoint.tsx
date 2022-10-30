import styled from "styled-components"

interface BulletPointProps {
	id: number
	children: string
	title: string
	changeActive: (id: number) => void
	changeHighlighted: (id: number) => void
}

const Bullet = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`

const BulletText = styled.div`
	display: flex;
	flex-direction: column;
`

const BulletTitle = styled.h2`
	font-weight: bold;
	font-size: 1rem;
	color: #fff;
`

const BulletSubTitle = styled.span`
	color: #adbdcc;
`

const BulletPoint = ({
	id,
	children,
	title,
	changeActive,
	changeHighlighted
}: BulletPointProps) => (
	<div
		onClick={() => changeActive(id)}
		onMouseOverCapture={() => changeHighlighted(id)}
	>
		<Bullet>
			<svg
				className="ChecklistControlIcon__svg"
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 22 22"
			>
				<path
					className="ChecklistControlIcon__active"
					d="M11,3a8,8,0,1,1-8,8A8,8,0,0,1,11,3Zm3.41,4.93L9.64,12.54,8.38,11.18a.7.7,0,0,0-.87-.04.61.61,0,0,0-.18.8l1.5,2.45a.839.839,0,0,0,.69.36.821.821,0,0,0,.68-.36c.24-.31,4.82-5.78,4.82-5.78.6-.6-.13-1.15-.6-.68Z"
				></path>
				<path
					className="ChecklistControlIcon__inactive"
					d="M11,3a8,8,0,1,0,8,8A8,8,0,0,0,11,3Zm3.635,8.721H11.751v2.884H10.308V11.721H7.424V10.279h2.884V7.394h1.442v2.884h2.884Z"
				></path>
				<path
					className="ChecklistControlIcon__timer"
					d="M11,1A10,10,0,1,1,1,11,10,10,0,0,1,11,1"
					// style="fill: none;stroke-width: 2px"
				></path>
			</svg>

			<BulletText>
				<BulletTitle>{title}</BulletTitle>
				<BulletSubTitle>{children}</BulletSubTitle>
			</BulletText>
		</Bullet>
	</div>
)

export default BulletPoint
