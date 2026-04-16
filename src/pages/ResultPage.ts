import { Locator, Page } from "@playwright/test";
export class ResultPage{
    readonly page:Page;
  
    
    constructor(page:Page){
        this.page=page;

        //Elements
    
    }

    //Methods
    
    async clickOnPlaylist(link:string){
        await this.page.getByRole('link',{name:link}).first().click();
        //await this.page.locator('[id="_H3vgaceUHfjM1sQPto6LsAI_48"]').first().click();
        //await this.page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    }
}