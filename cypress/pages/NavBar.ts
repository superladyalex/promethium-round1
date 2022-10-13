export class NavBar {
    private linkElement = '[data-testid="linkElement"]'   //linkElement is used everywhere
    private navBar = 'nav'
    private promethiumLogo = '[data-testid="linkElement"]';
    private richText = '[data-testid="richTextElement"]';
    private tryNowText = 'Try Now';

    openDropdown(item: string, subItem: string) {
        cy.get(this.navBar).contains(item).realHover()
        cy.get(this.linkElement).contains(subItem).click()
        return this;
    }

    getLogo() {
        return cy.get(this.promethiumLogo)
    }

    getTextFromRichText(n: number) {
        return cy.get(this.richText).eq(n)
    }

    clickTryNow() {
        let linkElementWithTryNowText = cy.get(this.promethiumLogo)
        linkElementWithTryNowText.invoke('removeAttr', 'target').contains(this.tryNowText)
        linkElementWithTryNowText.click()
        return this
    }
}
