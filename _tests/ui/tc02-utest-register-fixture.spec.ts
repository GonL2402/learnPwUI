import {test, expect} from '../../_fixtures/customer-fixture';

test('Access Register page', async ({utestPage}) => {
    await utestPage.click('header[role="banner"] a[ui-sref="signup.personal"]');
    await expect(utestPage).toHaveURL(/.*signup\/personal/);
});

test('Verify required fields on Register page', async ({registerPage}) => {
    //await registerPage.locator('button[id="onetrust-accept-btn-handler"]').click();
    await expect(registerPage).toHaveURL(/.*signup\/personal/);

    await registerPage.locator('button[ng-click="validateBasicInfoStep(userForm);"]').click(); 
    
    await expect(registerPage.locator('//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="firstNameError"]')).toHaveText('First name is required');
    await expect(registerPage.locator('//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="lastNameError"]')).toHaveText('Last name is required');
    await expect(registerPage.locator('//form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="emailError"]')).toHaveText('Enter valid email');
});