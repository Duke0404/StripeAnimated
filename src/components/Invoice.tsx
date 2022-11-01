import { ReactNode, useEffect } from "react"
import styled from "styled-components"
import InvoiceNode from "./InvoiceNode"

const InvoiceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border-radius: 8px;
	background-color: #0c2e4e;
`

const InvoiceTitle = styled.h1`
	font-weight: bold;
	font-size: 1.5rem;
	color: #fff;
`

const InvoiceSection = styled.div`
	display: flex;
	width: 100%;
`

const InvoiceRow = styled.div`
	display: flex;
	gap: 2rem;
	transition: all 0.2s ease-in-out;
	opacity: 1;
	width: 100%;
`

const InvoiceCell = styled.div`
	display: flex;
	min-width: 60px;
	padding: 1rem;
`

const InvoiceCellFirst = styled(InvoiceCell)`
	width: 30%;
`

const Seperator = styled.hr`
	width: 95%;
	opacity: 0.25;
`

interface InvoiceProps {
	active: boolean[]
}

const Invoice = ({ active }: InvoiceProps) => {
	return (
		<InvoiceContainer>
			<InvoiceTitle>Invoice</InvoiceTitle>

			<p>
				{active[5]
					? "Billing period from March 15th, 2021 to April 14th, 2021"
					: "Billing period from March 1st, 2021 to March 31st, 2021"}
			</p>

			<InvoiceRow>
				<InvoiceCellFirst>Description</InvoiceCellFirst>
				<InvoiceCell>Qty</InvoiceCell>
				<InvoiceCell>Price</InvoiceCell>
				<InvoiceCell>Amount</InvoiceCell>
			</InvoiceRow>

			<Seperator />

			<InvoiceNode
				active={active[0]}
			>
				<InvoiceSection>
					<InvoiceRow>
						<InvoiceCellFirst>Setup fee</InvoiceCellFirst>
						<InvoiceCell>1</InvoiceCell>
						<InvoiceCell>$600.00</InvoiceCell>
						<InvoiceCell>$600.00</InvoiceCell>
					</InvoiceRow>
				</InvoiceSection>
			</InvoiceNode>

			<InvoiceNode
				active={active[1]}
			>
				<InvoiceRow>
					<InvoiceCellFirst>Enterprise (per user)</InvoiceCellFirst>
					<InvoiceCell>28</InvoiceCell>
					<InvoiceCell>$50.00</InvoiceCell>
					<InvoiceCell>$1,400.00</InvoiceCell>
				</InvoiceRow>
			</InvoiceNode>

			<InvoiceNode
				active={active[2]}
			>
				<InvoiceRow>
					<InvoiceCellFirst>Additional bandwidth (per GB)</InvoiceCellFirst>
					<InvoiceCell>20</InvoiceCell>
					<InvoiceCell>$50.00</InvoiceCell>
					<InvoiceCell>$1,000.00</InvoiceCell>
				</InvoiceRow>
			</InvoiceNode>

			<InvoiceNode
				active={active[3]}
			>
				<>
					<InvoiceRow>
						<InvoiceCellFirst>Storage (per GB)</InvoiceCellFirst>
						<InvoiceCell></InvoiceCell>
						<InvoiceCell></InvoiceCell>
						<InvoiceCell></InvoiceCell>
					</InvoiceRow>
					<InvoiceRow>
						<InvoiceCellFirst>First 1,000</InvoiceCellFirst>
						<InvoiceCell>1,000</InvoiceCell>
						<InvoiceCell>$1.00</InvoiceCell>
						<InvoiceCell>$1,000.00</InvoiceCell>
					</InvoiceRow>
					<InvoiceRow>
						<InvoiceCellFirst>Next 1,001 to 10,000</InvoiceCellFirst>
						<InvoiceCell>9,000</InvoiceCell>
						<InvoiceCell>$0.50</InvoiceCell>
						<InvoiceCell>$4,500.00</InvoiceCell>
					</InvoiceRow>
					<InvoiceRow>
						<InvoiceCellFirst>10,001 and above</InvoiceCellFirst>
						<InvoiceCell>100</InvoiceCell>
						<InvoiceCell>$0.25</InvoiceCell>
						<InvoiceCell>$25.00</InvoiceCell>
					</InvoiceRow>
				</>
			</InvoiceNode>

			<InvoiceNode
				active={active[4]}
			>
				<InvoiceRow>
					<InvoiceCellFirst>Discount (referral)</InvoiceCellFirst>
					<InvoiceCell></InvoiceCell>
					<InvoiceCell></InvoiceCell>
					<InvoiceCell>-$1,000.00</InvoiceCell>
				</InvoiceRow>
			</InvoiceNode>

			<Seperator />

			<InvoiceRow>
				<InvoiceCellFirst>
					<InvoiceTitle>Total</InvoiceTitle>
				</InvoiceCellFirst>
				<InvoiceCell></InvoiceCell>
				<InvoiceCell></InvoiceCell>
				<InvoiceCell>
					<InvoiceTitle>$10000</InvoiceTitle>
				</InvoiceCell>
			</InvoiceRow>
		</InvoiceContainer>
	)
}

export default Invoice
