/**
 * CSS로 팝업을 제어하기 위함
 */

import React, { MouseEvent, ReactNode } from 'react'

interface IWrapperProps {
    children: ReactNode
    isOpen: boolean
    className: string
}

function PopUpWrapper (props: IWrapperProps) {

    return (
        <div
            className={props.className}
            style={{ display: props.isOpen ? 'block' : 'none' }}
        >
            {props.children}
        </div>
    )
}

export default PopUpWrapper;