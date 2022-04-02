function Admin() {
    const OnSubmitLogin = () => {
    }

    return (
        <div>
            <div className="login-box hb_adm_login">
                <div className="login-box-body">
                    <form method="post" name="loginfrm" id="loginfrm">
                        <input type="text" name="hb_admin_id" id="hb_admin_id" className="form-control" placeholder="ID"
                               value=""/>
                            <input type="password" name="hb_admin_pass" id="hb_admin_pass" className="form-control" placeholder="Password"/>
                                <div className="row">
                                    <div className="col-xs-8">
                                        <div className="checkbox icheck">
                                            <label>
                                                <div className="icheckbox_square-blue" aria-checked="false"
                                                     aria-disabled="false">
                                                    <input type="checkbox" name="keepid" id="keepid" value="1" />
                                                    <ins className="iCheck-helper"></ins>
                                                </div>
                                                ID 저장 </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                        <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={OnSubmitLogin}>로그인</button>
                                    </div>
                                </div>
                    </form>
                <br/>
                    <a href="register.html" className="text-center">회원 가입하기</a> </div>
            </div>
        </div>);
}

export default Admin;