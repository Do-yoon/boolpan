import PageActions from "store/page/action";
import PopUp from "../../component/pop-up/PopUp";
import React from "react";
import ChattingPopUp from "../../component/pop-up/chat-popup/ChattingPopUp";

test('action making', () => {
  expect(PageActions.loginPopUp()).toBe({
    type: 'LOGIN_POP_UP',
    payload: {amount: 1},
    meta: {key: 'value', amount: 1}
  });
})

test("pop-up test", () => {
  expect(<PopUp classname="ChattingPopUp">{ChattingPopUp}</PopUp>).toBe({})
})