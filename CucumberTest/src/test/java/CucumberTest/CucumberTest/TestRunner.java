package CucumberTest.CucumberTest;
import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
		format={"pretty","html:target/cucumber"}
		)

public class TestRunner {

}
