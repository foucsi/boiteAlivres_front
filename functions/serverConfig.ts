const SERVER_URL_PRODUCTION = process.env.NODE_ENV || 'http://192.168.1.38:3000';
const SERVER_URL_DEVELOPMENT = 'http://localhost:3000';

export const serverConfig = () => {
    const isProduction = process.env.NODE_ENV === 'production';
    return isProduction ? SERVER_URL_PRODUCTION : SERVER_URL_DEVELOPMENT;
}
