import { ReactElement, ReactNode, useEffect } from "react"
import styled from "styled-components"
import InvoiceNode from "./InvoiceNode"

const InvoiceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border-radius: 8px;
	background-color: #0c2e4e;
	width: 50%;
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

interface InvoiceProps {
	active: boolean[]
	highlighted: boolean[]
}

const Invoice = ({ active, highlighted }: InvoiceProps) => {
	return (
		<InvoiceContainer>
			<InvoiceTitle>Invoice</InvoiceTitle>

			<p>Billing period from March 15th, 2021 to April 14th, 2021</p>

			<InvoiceRow>
				<InvoiceCellFirst>Description</InvoiceCellFirst>
				<InvoiceCell>Qty</InvoiceCell>
				<InvoiceCell>Price</InvoiceCell>
				<InvoiceCell>Amount</InvoiceCell>
			</InvoiceRow>

			<InvoiceNode
				highlighted={highlighted[0]}
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
				highlighted={highlighted[1]}
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
				highlighted={highlighted[2]}
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
				highlighted={highlighted[3]}
				active={active[3]}
			>
				<>
					Storage (per GB)
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
				highlighted={highlighted[4]}
				active={active[4]}
			>
				<InvoiceRow>
					<InvoiceCellFirst>Discount (referral)</InvoiceCellFirst>
					<InvoiceCell></InvoiceCell>
					<InvoiceCell></InvoiceCell>
					<InvoiceCell>-$1,000.00</InvoiceCell>
				</InvoiceRow>
			</InvoiceNode>
		</InvoiceContainer>
	)
}

export default Invoice
