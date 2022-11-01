# Stripe Component

A clone of a component from Stripe's billing website.

## Component Tree

* ### App
	The app component is the parent component of the entire React application. It contains the two main components Features & Invoice.

	Holds the state "active" which is used to toggle whether a feature is active or not on the invoice.

	Also, contains the effect to enable each feature on the invoice after 1 second in order using setInterval.


* ### Features
	It contains the bullet list of features on the page using the BulletPoint component.

* ### BulletPoint
	It contains the feature title, description, and the toggle button icon.

* ### Invoice
	It contains the invoice title, the list of sections on the invoice using the InvoiceNode component, and the total price.

	Also contains the logic to calculate the total price.

* ### InvoiceNode
	It is a wrapper for each section of the invoice so that it can be toggled.

## States
* ### active
	An array of booleans in the App component that holds the state of each feature on the page. It is passed down to the Features & Invoice component as a prop. Used to toggle each section of the invoice from click on each feature.

## Effects
* Only side-effect in the app is present on the App component that is used to enable each feature on the invoice after 1 second in order using setInterval and clears the interval when all features are enabled.

## Images
* The images are stored in the images folder and are imported into the InvoiceNode component. It contains the check & add icons used to represent the toggle button. The logic to switch between the two icons is present in the InvoiceNode component.