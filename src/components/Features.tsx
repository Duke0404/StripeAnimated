import styled from "styled-components"

import BulletPoint from "./BulletPoint"

const BulletPointContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const SmallTitle = styled.span`
	font-weight: bold;
	font-size: 1.25rem;
	color: #ffce48;
`

const LargeTitle = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	color: #fff;
`

const Description = styled.p`
	font-size: 1.25rem;
`

interface FeaturesProps {
	changeHighlighted: (id: number) => void
	changeActive: (id: number) => void
}

const Features = ({ changeHighlighted, changeActive }: FeaturesProps) => (
	<BulletPointContainer>
		<SmallTitle>Granular control</SmallTitle>
		<LargeTitle>Effortlessly design and test pricing plans</LargeTitle>

		<Description>
			Iterate on your pricing as quickly as you improve your product with Stripe’s flexible
			subscription billing components.
		</Description>

		<BulletPoint
			id={0}
			title="One-time"
			changeActive={changeActive}
			changeHighlighted={changeHighlighted}
		>
			Charge for one-time purchases.
		</BulletPoint>

		<BulletPoint
			id={1}
			title="Recurring billing"
			changeActive={changeActive}
			changeHighlighted={changeHighlighted}
		>
			Charge a single price on a recurring basis.
		</BulletPoint>

		<BulletPoint
			id={2}
			title="Usage-based billing"
			changeActive={changeActive}
			changeHighlighted={changeHighlighted}
		>
			Calculate billing based on product usage.
		</BulletPoint>

		<BulletPoint
			id={3}
			title="Tiered pricing"
			changeActive={changeActive}
			changeHighlighted={changeHighlighted}
		>
			Charge different prices based on volume tiers.
		</BulletPoint>

		<BulletPoint
			id={4}
			title="Promotions and trial periods"
			changeActive={changeActive}
			changeHighlighted={changeHighlighted}
		>
			Adjust billing with discounts and trials.
		</BulletPoint>

		<BulletPoint
			id={5}
			title="Billing frequency"
			changeActive={changeActive}
			changeHighlighted={changeHighlighted}
		>
			Bill daily, weekly, monthly, or annually in advance or in arrears, and set custom future
			start dates.
		</BulletPoint>
	</BulletPointContainer>
)

export default Features
