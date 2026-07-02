import { log } from "node:console";

export class HomeScreen {
    notNowButton: any;
    personButton: any;
    rectangleButton: any;
    signOutButton: any;


    
  constructor(private screen: any) {
    //locators
    this.notNowButton = this.screen.getByRole('button', { name: 'Not Now' });
    this.personButton = this.screen.getByLabel('person');
    this.rectangleButton= this.screen.getByLabel('rectangle.portrait.and.arrow.right');
    this.signOutButton = this.screen.getByRole('button', { name: 'Sign out' });

  }

  async clickOnProduct() {
    // Implementation for clicking on a product
    if (await this.notNowButton.isVisible({ timeout: 5000 })) 
      await this.notNowButton.tap();
    await this.screen.getByRole('button', { name: /Crew/i }).tap();

  }

  async logout() {
      await this.personButton.tap();
      await this.rectangleButton.tap();
      await this.signOutButton.tap();
    }
}