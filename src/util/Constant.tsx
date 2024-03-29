const Constant = {
    CATEGORY: [
        "아이돌",
        "영화",
        "드라마"
    ],
    LOGIN: "로그인",
    LOGOUT: "로그아웃",
    PLEASE_LOGIN: "로그인 해 주세요.",
    LIMITATION: "정원",
    CREATE_ROOM: "방 만들기",
    CONCURRENT_CONNECTION_AMOUNT: "현재 접속자 수",
    ROOM_AMOUNT: "오픈 방 수",
    KEYWORD_SEARCH_PLACEHOLDER: "키워드를 입력하세요"
}

export const REST_BASE_URL = process.env.NODE_ENV === 'production'
    ? `http://3.37.61.56:8081/api`
    : 'http://localhost:8081/api';

export const CHAT_SERVER_BASE_URL = "http://localhost:8083";

export const Urls = {
    SEARCH: '/search'
}


export default Constant;