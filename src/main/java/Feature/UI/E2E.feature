Feature: Timberland Sanity Testing

Background: 
	Given User is on HomePage 
	And Close cookie policy and Deny notification 

@Sanity123
Scenario Outline: Guest User checkout using CC

	When User click "<category>" and select "<subcategory>" 
	And Select the first product 
	And Select the quantity size and proceed to cart 
	And User lands to cart page and proceed 
	Then User lands on Welcome page 
	And User enters "<Email>" and proceed as guest user 
	And User lands on billing address page 
	And User enters billing address and proceed 
	Then User lands on payment page 
	And User pay using "<PaymentMethod>" 
	Then Verify order confirmation page 
	
	Examples: 
		|	category	|	subcategory					|	Email					|	PaymentMethod	|
		|	Men			|	T-Shirts					|	test_001@yopmail.com	|	CC				|
		

@Sanity
Scenario Outline: Guest User checkout using Paypal

 When User click "<category>" and select "<subcategory>" 
	And Select the first product 
	And Select the quantity size and proceed to cart 
	And User lands to cart page and proceed 
	Then User lands on Welcome page 
	And User enters "<Email>" and proceed as guest user 
	And User lands on billing address page 
	And User enters billing address and proceed 
	Then User lands on payment page 
	And User pay using "<PaymentMethod>" 
	Then Verify order confirmation page 
	
	
	Examples: 
		|	category	|	subcategory					|	Email					|	PaymentMethod	|
		|	Men			|	T-Shirts					|	test_002@yopmail.com	|	PayPal			|
		
		
		
@Sanity1
Scenario Outline: Guest User checkout using GC Only

	When User click "<category>" and select "<subcategory>" 
	And Select the first product 
	And Select the quantity size and proceed to cart 
	And User lands to cart page and proceed 
	Then User lands on Welcome page 
	And User enters "<Email>" and proceed as guest user 
	And User lands on billing address page 
	And User enters billing address and proceed 
	Then User lands on payment page 
	And User pay using "<PaymentMethod>" 
	Then Verify order confirmation page 
	
	Examples: 
		|	category	|	subcategory	|	Email					|	PaymentMethod	|
		|	Men			|	T-Shirts	|	test_003@yopmail.com	|	GC				|		
				
	