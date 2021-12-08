import {State} from "@store/state";
import {PopUpType} from "@store/state";
import {AppDispatch} from "@store/index";
import {connect} from "react-redux";

type Props = {
    PopUpType: PopUpType

}

function PopUpContainer(props: Props) {
    const popUp = () => {
        switch (props.PopUpType) {
            case PopUpType.CREATE_ROOM:
                return PopUpContainer
            default:
                return null
        }
    }
    console.log(mapStateToProps.popUp)

    return (
        <div className='pop-up-wrapper'>
            {popUp()}
        </div>
    );
}

const mapStateToProps: any = (state: State) => ({
    popUp: state.page.popUp
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    OpenPopUp: () => {
        console.log('open pop up')
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PopUpContainer);