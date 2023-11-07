const appConfig = {
    isOpen: false,
    isProd: process.env.REACT_APP_SERVER === 'prod',
    env: process.env.NODE_ENV,
    apiHost: process.env.REACT_APP_RESTAPI,
    apiPort: process.env.REACT_APP_RESTAPI_PORT,
    apiPrefix: '/api',
    kakaoMapApiKey: process.env.REACT_APP_KAKAO_MAP_API_KEY,
}

appConfig.isShow = appConfig.isOpen || !appConfig.isProd
appConfig.apiPreUrl = appConfig.apiHost + appConfig.apiPrefix

export default appConfig