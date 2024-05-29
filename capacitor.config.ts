import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'sveltekit-starter-template',
	webDir: 'dist',
	server: {
		url: 'http://192.168.100.6:5173/',
		cleartext: true
	}
};

export default config;
