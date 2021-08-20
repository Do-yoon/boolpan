const Constant = {
    CATEGORY: [
        "아이돌",
        "영화",
        "드라마"
    ],
    WEEK: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(w => <th><td>{w}</td></th>),
    TIMELIST: [...Array(24)].map((e, i) => {
        let time;
        if (i > 12)
            time = `오후 ${i%12}시`;
        else if (i === 12)
            time = `오후 ${i}시`;
        else
            time = `오전 ${i}시`;
        
        const td_7 = [...Array(7)].map((e, i) => <td></td>)

        return (
            <tr>
                <td className="time-area">{time}</td>
                {td_7}
            </tr>
        );
    }),
    LOGIN: "로그인",
    LOGOUT: "로그아웃"
}


export default Constant;