const appConfig = {
    env: process.env.NODE_ENV,
    apiHost: process.env.REACT_APP_RESTAPI,
    apiPort: process.env.REACT_APP_RESTAPI_PORT,
    apiPreUrl: 'http://'+process.env.REACT_APP_RESTAPI+':'+process.env.REACT_APP_RESTAPI_PORT,
    apiPrefix: '/api',
    kakaoMapApiKey: process.env.REACT_APP_KAKAO_MAP_API_KEY,
}

export default appConfig