import { test } from "../../_fixtures/customer-fixture";

test('Access Register page', async ({ pomPage }) => {
    await pomPage.clickOnJoinNowButton();
    await pomPage.verifyRegisterPageLoaded();
});

test('Verify required fields', async ({ pomRegisterPage }) => {
    await pomRegisterPage.clickOnContinueButton();
    await pomRegisterPage.verifyRequiredFieldWarning();
});