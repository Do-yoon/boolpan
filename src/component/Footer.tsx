function Footer() {
    return (
        <div id="footer">
            <div className="footer-inner">
                <div className="corp-area">
                    <ul className="list_corp">
                        <li className="corp_item">
                            <a href="/intro">회사소개</a>
                        </li>
                        <li className="corp_item">
                            <a href="/recruit">인재채용</a>
                        </li>
                        <li className="corp_item">
                            <a href="/contact">제휴제안</a></li>
                        <li className="corp_item">
                            <a href="/policy/service.html">이용약관</a>
                        </li>
                        <li className="corp_item">
                            <a href="/policy/privacy.html">
                                <strong>개인정보처리방침</strong>
                            </a>
                        </li>
                        <li className="corp_item">
                            <a href="/policy/youthpolicy.html" data-clk="youth">청소년보호정책</a>
                        </li>
                        <li className="corp_item">
                            <a href="/policy/spamcheck.html" data-clk="policy">네이버 정책</a>
                        </li>
                        <li className="corp_item">
                            <a href="https://help.naver.com/" data-clk="helpcenter">고객센터</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;