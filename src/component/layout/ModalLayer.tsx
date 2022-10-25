/**
 * CSS로 팝업을 제어하기 위함
 */

import React, { MouseEvent, ReactNode } from 'react'

interface IModalLayerProps {
    children: ReactNode
    isOpen: boolean
    className: string
}

function ModalLayer (props: IModalLayerProps) {

    return (
        <div
            className={props.className}
            style={{ display: props.isOpen ? 'block' : 'none' }}
        >
            {props.children}
        </div>
    )
}

export default ModalLayer;