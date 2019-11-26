package StepDefn;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PDPStepDefn extends Base {
	
	@When("^Select the quantity size and proceed to cart$")
	public void select_the_quantity_size_and_proceed_to_cart() throws Exception {
		
		 driver.findElement(By.xpath("//button[@data-attribute-value='XL']")).click();
		 Thread.sleep(5000);
		 driver.findElement(By.xpath("//a[contains(text(),'add to basket')]")).click(); 
		 Thread.sleep(5000);
		 driver.findElement(By.xpath("//span[@class='topnav-cart-qty']")).click(); 
		 Thread.sleep(5000);
	}

}
