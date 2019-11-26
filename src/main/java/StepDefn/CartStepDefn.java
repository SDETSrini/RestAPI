package StepDefn;

import org.openqa.selenium.By;

import cucumber.api.java.en.And;
import junit.framework.Assert;

public class CartStepDefn extends Base{

	@And("^User lands to cart page and proceed$")
	public void user_lands_to_cart_page_and_proceed() throws Exception {
		Assert.assertEquals("Shopping Bag | Timberland United Kingdom", driver.getTitle());
		driver.findElement(By.xpath("(//a[text()='CHECKOUT SECURELY'])[2]")).click();
		Thread.sleep(3000);
	}
}
