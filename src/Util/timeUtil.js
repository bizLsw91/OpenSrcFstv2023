import axios from 'axios'; // axios 라이브러리를 사용하여 API 요청

/**
 * 현재 한국 시간과 파라미터로 전달된 시간(dateTime)을 비교하는 함수.
 *
 * @param {string} operator - 비교 연산자 ("<", ">", "<=", ">=" 중 하나)
 * @param {string} dateTime - 비교할 일시를 나타내는 문자열 (형식: YYYYMMDDHHmmSSS)
 * @returns {Promise<boolean>} - 비교 결과 (true 또는 false)
 *
 * @description
 * 1. 외부 서버(WorldTimeAPI)로부터 현재 한국 시간을 가져옵니다.
 * 2. 현재 시간과 입력된 시간(dateTime)을 비교 연산자를 사용해 비교합니다.
 * 3. 비교 결과를 불린 값으로 반환합니다.
 *
 * @example
 * const result = await compareWithCurrentTime("<", "202411201234567");
 * console.log(result); // true 또는 false
 */
const compareWithCurrentTime = async (operator, dateTime) => {
    try {
        // 외부 서버로부터 현재 한국 시간 가져오기
        const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Seoul');
        const currentTime = response.data.datetime; // ISO8601 형식의 현재 시간 (예: 2024-11-20T12:34:56.789Z)
        const currentKoreanTime = new Date(currentTime).getTime(); // 밀리초 값으로 변환

        // 파라미터로 받은 dateTime (YYYYMMDDHHmmSSS)을 밀리초 값으로 변환
        const targetTime = new Date(
            `${dateTime.slice(0, 4)}-${dateTime.slice(4, 6)}-${dateTime.slice(6, 8)}T${dateTime.slice(8, 10)}:${dateTime.slice(10, 12)}:${dateTime.slice(12, 15)}Z`
        ).getTime();

        // 비교 연산 수행
        let result;
        switch (operator) {
            case '<':
                result = currentKoreanTime < targetTime;
                break;
            case '>':
                result = currentKoreanTime > targetTime;
                break;
            case '<=':
                result = currentKoreanTime <= targetTime;
                break;
            case '>=':
                result = currentKoreanTime >= targetTime;
                break;
            default:
                throw new Error('Invalid operator. Use "<", ">", "<=", ">=" only.');
        }

        return result; // 비교 결과 반환
    } catch (error) {
        console.error('Error fetching current Korean time or performing comparison:', error);
        return false; // 오류 발생 시 기본값 반환
    }
};

export default compareWithCurrentTime;
