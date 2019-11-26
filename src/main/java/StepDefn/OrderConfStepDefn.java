package StepDefn;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import junit.framework.Assert;

public class OrderConfStepDefn extends Base{


@Then("^Verify order confirmation page$")
public void verify_order_confirmation_page() throws Exception {
	Assert.assertEquals("Order Confirmation | Timberland United Kingdom", driver.getTitle());
	String s = driver.findElement(By.xpath("//p[@class='order-confirmation-page-message message success']")).getText();
	System.out.println(s);
	Assert.assertEquals("YOUR ORDER HAS BEEN PLACED", s.trim());
	System.out.println(driver.findElement(By.xpath("//h1[@class='order-confirmation-page-title page-title']")).getText());
	
	driver.quit();
}
}
