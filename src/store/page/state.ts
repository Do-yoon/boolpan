import PopUp from "@component/pop-up/PopUp";

export interface PageState {
    popUp: typeof PopUp | undefined
};

const initPageState: PageState = {
    popUp: undefined
}

export default initPageState;