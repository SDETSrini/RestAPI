Feature: Login API 


@Sanity123
Scenario: Verify Login API  - Status code :: 200 
	Given the end point is "login" 
	And the method is "GET" 
	Then status code is 200 


@Sanity123	
Scenario: Validate Login API - Response body Schema validation 
	Given the end point is "login" 
	And the method is "GET" 
	Then status code is 200 
	And the response body is in json "login" 
	
	
	
	