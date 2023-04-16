import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
import { faker } from "@faker-js/faker";
describe("Test of Shop automation website", () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  beforeEach(function () {
    cy.fixture("users").as("userData");
  });

  it("should pass login app", function () {
    homePage.visitPage();
    homePage.clickMyAccountHeaderButton();
    accountPage.fillUsernameFieldWithEmail(this.userData.email);
    accountPage.fillPasswordField(this.userData.password);
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfMyAccountNavigation();
  });

  it("should fail login app", function () {
    accountPage.visitPage();
    accountPage.fillUsernameFieldWithEmail(faker.internet.email());
    accountPage.fillPasswordField(faker.internet.password());
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfErrorAfterWrongLogin();
  });
});
