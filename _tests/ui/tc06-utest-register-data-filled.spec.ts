import { test, expect } from '@playwright/test'
import { UiHelper } from '../../utils/uiHelper';

test('Input register page step 1', async ({page}) => {
    await page.goto('https://utest.com/');
    
    await page.locator('button[id="onetrust-accept-btn-handler"]').click();

    await page.locator('header[role="banner"] a[ui-sref="signup.personal"]').click();
    await expect(page).toHaveURL(/.*signup\/personal/);

    await page.locator('form[name="userForm"] input[id="firstName"]').fill('Long');
    await page.locator('form[name="userForm"] input[id="lastName"]').fill('Nguyen');
    await page.locator('form[name="userForm"] input[id="email"]').fill('long@test.com');
    await page.locator('form[name="userForm"] select[id="birthMonth"]').selectOption('February');
    await page.locator('form[name="userForm"] select[id="birthDay"]').selectOption('24');
    await page.locator('form[name="userForm"] select[id="birthYear"]').selectOption('1988');

    await page.locator('button[ng-click="validateBasicInfoStep(userForm);"]').click();
    await expect(page).toHaveURL(/.*signup\/address/);
})

test('Input register page using csv file', async({page}) => {
    const user = UiHelper.readCsvData('_data/userDetails.csv', 1);

    await page.goto('https://utest.com/');
    
    await page.locator('button[id="onetrust-accept-btn-handler"]').click();

    await page.locator('header[role="banner"] a[ui-sref="signup.personal"]').click();
    await expect(page).toHaveURL(/.*signup\/personal/);

    await page.locator('form[name="userForm"] input[id="firstName"]').fill(user.firstName);
    await page.locator('form[name="userForm"] input[id="lastName"]').fill(user.lastName);
    await page.locator('form[name="userForm"] input[id="email"]').fill(user.email);
    await page.locator('form[name="userForm"] select[id="birthMonth"]').selectOption('February');
    await page.locator('form[name="userForm"] select[id="birthDay"]').selectOption('24');
    await page.locator('form[name="userForm"] select[id="birthYear"]').selectOption('1988');

    await page.waitForTimeout(500);
    await page.locator('button[ng-click="validateBasicInfoStep(userForm);"]').click();
    await expect(page).toHaveURL(/.*signup\/address/);
})