import PageAction from "store/page/action";
import PopUp from "../../component/pop-up/PopUp";
import React from "react";
import ChattingPopUp from "../../component/pop-up/chat-popup/ChattingPopUp";
import LoginPopUp from "../../component/pop-up/login-popup/LoginPopUp";

test('action making', () => {
  expect(PageAction.loginPopUp()).toBe({
    type: 'LOGIN_POP_UP',
    payload: {popUp: <LoginPopUp />},
  });
})

test("pop-up test", () => {
  expect(<PopUp classname="ChattingPopUp">{ChattingPopUp}</PopUp>).toBe({})
})