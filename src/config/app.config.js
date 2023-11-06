const appConfig = {
    isOpen: false,
    isProd: process.env.NODE_ENV === 'production',
    env: process.env.NODE_ENV,
    apiHost: process.env.REACT_APP_RESTAPI,
    apiPort: process.env.REACT_APP_RESTAPI_PORT,
    apiPreUrl: 'http://'+process.env.REACT_APP_RESTAPI+':'+process.env.REACT_APP_RESTAPI_PORT,
    apiPrefix: '/api',
    kakaoMapApiKey: process.env.REACT_APP_KAKAO_MAP_API_KEY,
}

appConfig.isShow = appConfig.isOpen || !appConfig.isProd

export default appConfig