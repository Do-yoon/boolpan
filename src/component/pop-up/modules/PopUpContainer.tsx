import React, {useState, useRef} from "react";
import {useAppSelector} from "../../../util/hooks";
import {RootState} from "../../../store";
import CreateRoomPopUp from "../CreateRoomPopUp";
import ChattingPopUp from "../ChattingPopUp";
import LoginPopUp from "../LoginPopUp";
import PasswordPopUp from "../PasswordPopUp";
import SignUpPopUp from "../SignUpPopUp";

interface PopUpContainerProps {
    children?: React.ReactNode
}

function PopUpContainer(): JSX.Element | null {
    const pop_up_string = useAppSelector((state: RootState) => state.popUp.name);


    console.log(pop_up_string)

    function components() {
        switch (pop_up_string) {
            case "LoginPopUp":
                return <LoginPopUp/>;
            case "ChattingPopUp":
                return <ChattingPopUp/>;
            case "SignUpPopUp":
                return <SignUpPopUp/>;
            case "CreateRoomPopUp":
                return <CreateRoomPopUp/>;
            case "PasswordPopUp":
                return <PasswordPopUp/>;
            default:
                return null;
        }
    }

    return components();
}

export default PopUpContainer;
