package StepDefn;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class PLPStepDefn extends Base {

	@And("^Select the first product$")
	public void select_the_first_product() throws Exception {
		
		driver.findElement(By.xpath("//div[@class= 'product-block product-block-js'][5]")).click(); //QA
//		driver.findElement(By.xpath("//div[@data-product-line= 'inline'][1]")).click(); //DEV
		
		
		
	}
}
