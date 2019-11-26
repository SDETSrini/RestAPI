package StepDefn;

import com.sun.xml.xsom.impl.Ref.ContentType;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import junit.framework.Assert;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class LoginAPIStepDefn {
	
	
	
	Response res;
	
	@Given("^the end point is \"([^\"]*)\"$")
	public void the_end_point_is(String arg1) throws Exception {
		
		
		RestAssured.baseURI="https://reqres.in/";
		
		
	}

	@Given("^the method is \"([^\"]*)\"$")
	public void the_method_is(String arg1) throws Exception {
		
		if(arg1.equals("GET"))
		{
			res = given().when().get("api/users/2").then().assertThat().statusCode(200).and().extract().response();
			String responsenew = res.asString();
			System.out.println(responsenew);
			
		}
	   
	}

	@Then("^status code is (\\d+)$")
	public void status_code_is(int arg1) throws Exception {
		int statuscode = res.statusCode();
		Assert.assertEquals(arg1, statuscode);
	   
	}
	
	@Then("^the response body is in json \"([^\"]*)\"$")
	public void the_response_body_is_in_json(String arg1)  {
		
		String filepath = arg1 + ".json";		
		
		given().when().get("api/users/2").then().assertThat().body(matchesJsonSchemaInClasspath(filepath));
		
	}


}
