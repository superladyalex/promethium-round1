export class WebinarsPage {
    private linkElement = '[data-testid="linkElement"]'   //linkElement is used everywhere

    downloadFile(file: string){
       cy.get(this.linkElement).invoke('removeAttr', 'target').contains(file).click()
        return this;
    }
}