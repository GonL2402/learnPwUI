//import { test } from 'playwright/test'
import { HomePage } from '../../_page-objects/utest/homePage';
import { test } from '../../_fixtures/customer-fixture';
import { RegisterPage } from '../../_page-objects/utest/registerPage';


test ('Store cookies into StorageState', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHomePage();
});

test ('Verify required fileds', async({ contextPage }) => {
    const registerPage = new RegisterPage(contextPage);
    await registerPage.gotoRegisterPage();
    await registerPage.clickOnContinueButton();
    await registerPage.verifyRequiredFieldWarning();
})