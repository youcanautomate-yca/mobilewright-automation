import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  bundleId: 'com.Imen.ecommerceApp',
  reporter: 'html',
  platform: 'ios',
  deviceName: /youcanautomate1/,
  timeout: 1000_000
});
