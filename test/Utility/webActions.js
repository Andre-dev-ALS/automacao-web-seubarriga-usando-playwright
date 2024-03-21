const { expect } = require('@playwright/test');
class WebActions {

    async wright(element, value, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            await global.page.locator(element).fill(value)
        } else {
            await global.page.locator(element, { timeout: '"+waitingTime+"' }).fill(value)
        }
    }

    async click(element, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            await global.page.locator(element).click()
        } else {
            await global.page.locator(element, { timeout: '"+waitingTime+"' }).click()
        }
    }

    async validateText(element, value, waitingTime) {
        let textElement = await page.textContent(element);

        if (waitingTime == undefined || waitingTime <= 0) {
            await expect(await global.page.locator(element)).toBeVisible()
            await expect(textElement).toContain(value);
        } else {
            await expect(await global.page.locator(element, { timeout: '"+waitingTime+"' })).toBeVisible()
            await expect(textElement).toContain(value);
        }
    }

}

module.exports = { WebActions }