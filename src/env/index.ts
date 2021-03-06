import Config from 'react-native-config';

export const APP_ID = Config.APP_ID;

export const APP_VERSION_CODE = parseInt(Config.APP_VERSION_CODE, 10);

export const APP_VERSION_NAME = Config.APP_VERSION_NAME;

export const TEST_MODE = Config.TEST_MODE === 'true' || false;

export const SUBMIT_URL = Config.SUBMIT_URL;

export const RETRIEVE_URL = Config.RETRIEVE_URL;

export const HMAC_KEY = Config.HMAC_KEY;
