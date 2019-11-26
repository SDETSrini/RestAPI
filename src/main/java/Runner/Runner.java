package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\Feature", 
		glue = {"StepDefn" }, 
		plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json" },
		dryRun = true, // throw error if any code snippet is missing
		monochrome = true,// to avoid some junk in the console
		tags = {"@Sanity123"}
	//	tags = {"@E2E, @Sanity" } // OR - executes if any of the tag is there
	//	tags = {"@E2E", "@Sanity"} // AND - executes only if both tag is there
)

public class Runner {

}
