package StepDefn;

import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class WelcomeStepDefn extends Base {

	@Then("^User lands on Welcome page$")
	public void user_lands_on_Welcome_page() throws Exception {
		Assert.assertEquals("Welcome | Timberland United Kingdom", driver.getTitle());
		
	}
	
	@Then("^User enters \"([^\"]*)\" and proceed as guest user$")
	public void user_enters_and_proceed_as_guest_user(String arg1) throws Exception {
		driver.findElement(By.xpath("//input[@id='guest-email']")).sendKeys(arg1);
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),'Proceed to checkout')]")).click();
		Thread.sleep(5000);
	}
}
