export class LoginScreen {
    emailInput: any;
    passwordInput: any;
    signInButton: any;

  constructor(private screen: any) {
    //locators
    this.emailInput = this.screen.getByPlaceholder('Email');
    this.passwordInput = this.screen.getByPlaceholder('Password');
    this.signInButton = this.screen.getByRole('button', { name: 'Sign In' });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.tap();
  }
}