import PageAction from "src/store/action";
import PopUpLayout from "../../component/pop-up/modules/PopUpLayout";
import React from "react";
import ChattingPopUp from "../../component/pop-up/ChattingPopUp";
import LoginPopUp from "../../component/pop-up/LoginPopUp";

test('action making', () => {
  expect(PageAction.loginPopUp()).toBe({
    type: 'LOGIN_POP_UP',
    payload: {popUp: <LoginPopUp />},
  });
})

test("pop-up test", () => {
  expect(<PopUpLayout className="ChattingPopUp">{ChattingPopUp}</PopUpLayout>).toBe({})
})