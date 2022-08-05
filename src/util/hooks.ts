import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import {useEffect} from "react";
import socket from "../io/socket"


export const useIOEffect = (callback: () => void, ev: string) => useEffect(() => {
    callback()
    return function cleanup() {socket.off(ev)}
})
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector