import LoginInPage from './LoginPage';

describe('Sign In', () => {
    it('should login with email and password', () => {
      const login = new LoginInPage();
      login.visit();
      login.fillEmail("admin@example.com");
      login.fillPassword("admin123");
      login.submit();
    });

  });