import {test, expect} from '@mobilewright/test';
import { HomeScreen } from './pages/HomeScreen';
import { LoginScreen } from './pages/LoginScreen';      

test('app launches and shows home screen and logout ', async ({ screen, device }) => {

    const loginScreen = new LoginScreen(screen);
    const homeScreen = new HomeScreen(screen);
    
    await loginScreen.login('youcanautomate@gmail.com', 'Test123');
    await  homeScreen.clickOnProduct();
    await homeScreen.logout();
});