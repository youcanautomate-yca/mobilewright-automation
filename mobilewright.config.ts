import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  bundleId: 'com.Imen.ecommerceApp',
  reporter: 'html',
  platform: 'ios',
  // deviceName: /youcanautomate/,
  timeout: 120_000,
  workers: 3,
  fullyParallel: true,
});
