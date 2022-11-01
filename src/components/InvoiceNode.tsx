import styled from "styled-components"

interface InvoiceNodeProps {
	active: boolean
	children: JSX.Element
}

const InvoiceNodeUnstyled = ({ active, children }: InvoiceNodeProps) => (
	<>{active && children}</>
)

const InvoiceNode = styled(InvoiceNodeUnstyled)`
	transition: position 0.2s ease-in-out, opacity 0.2s ease-in-out;
`

export default InvoiceNode
