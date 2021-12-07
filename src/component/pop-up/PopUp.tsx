type Props = {
    children?: React.ReactNode
}

function PopUp(props: Props) {
    return (
        <div className='pop-up-wrapper'>
            {props.children}
        </div>
    );
}

export default PopUp;