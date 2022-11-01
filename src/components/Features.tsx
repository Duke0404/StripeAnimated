import styled from "styled-components"

import BulletPoint from "./BulletPoint"

const BulletPointContainer = styled.div`
	display: flex;
	gap: 0.75rem;
	flex-direction: column;
	max-width: 50%;

	@media (max-width: 900px) {
		min-width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`

const SmallTitle = styled.span`
	font-weight: bold;
	font-size: 1.25rem;
	color: #ffce48;
`

const LargeTitle = styled.h1`
	font-weight: bold;
	margin: 0;
	font-size: 2rem;
	color: #fff;
`

const Description = styled.p`
	font-size: 1.25rem;
	margin: 0;
`

interface FeaturesProps {
	changeActive: (id: number) => void
	active: boolean[]
}

const Features = ({ changeActive, active }: FeaturesProps) => (
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
			active={active[0]}
		>
			Charge for one-time purchases.
		</BulletPoint>

		<BulletPoint
			id={1}
			title="Recurring billing"
			changeActive={changeActive}
			active={active[1]}
		>
			Charge a single price on a recurring basis.
		</BulletPoint>

		<BulletPoint
			id={2}
			title="Usage-based billing"
			changeActive={changeActive}
			active={active[2]}
		>
			Calculate billing based on product usage.
		</BulletPoint>

		<BulletPoint
			id={3}
			title="Tiered pricing"
			changeActive={changeActive}
			active={active[3]}
		>
			Charge different prices based on volume tiers.
		</BulletPoint>

		<BulletPoint
			id={4}
			title="Promotions and trial periods"
			changeActive={changeActive}
			active={active[4]}
		>
			Adjust billing with discounts and trials.
		</BulletPoint>

		<BulletPoint
			id={5}
			title="Billing frequency"
			changeActive={changeActive}
			active={active[5]}
		>
			Bill daily, weekly, monthly, or annually in advance or in arrears, and set custom future
			start dates.
		</BulletPoint>
	</BulletPointContainer>
)

export default Features
