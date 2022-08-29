import PageAction from "src/store/action";
import PopUpLayout from "../../component/pop-up/PopUpLayout";
import React from "react";
import ChattingPopUp from "../../component/pop-up/chat-popup/ChattingPopUp";
import LoginPopUp from "../../component/pop-up/modules/login-popup/LoginPopUp";

test('action making', () => {
  expect(PageAction.loginPopUp()).toBe({
    type: 'LOGIN_POP_UP',
    payload: {popUp: <LoginPopUp />},
  });
})

test("pop-up test", () => {
  expect(<PopUpLayout classname="ChattingPopUp">{ChattingPopUp}</PopUpLayout>).toBe({})
})