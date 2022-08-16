import {RootState} from "store/index";
import {useEffect, useState} from "react";
import {useAppSelector} from "util/hooks";

const Timer = ({ second }: {second: number}) => {
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(second);
    const date = new Date(second);
    const [hours, setHours] = useState(("0" + date.getHours()).slice(-2));
    const [minutes, setMinutes] = useState(("0" + date.getMinutes()).slice(-2));
    const [seconds, setSeconds] = useState(("0" + date.getSeconds()).slice(-2));



    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        function tick() {
            setTimeLeft(timeLeft - 1);
            setHours(("0" + date.getHours()).slice(-2));
            setMinutes(("0" + date.getMinutes()).slice(-2));
            setSeconds(("0" + date.getSeconds()).slice(-2));
            console.log()
        }

        const intervalId = setInterval(() => {
            tick()
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft, hours, minutes, seconds]);

    return (
        <div>{`${hours}:${minutes}:${seconds}`}</div>
    );
};

function ChatHeader() {
    const {name, current, limit, explode_time}
        = useAppSelector((state: RootState) => state.chats.roominfo!)
    console.log(explode_time - (Date.now() / 1000))

    return <div className="roominfo">
        <span className="roominfo name">{name}</span>
        <span className="roominfo current">{`(${current} / ${limit})`}</span>
        <span>
            <Timer second={Number(explode_time - (Date.now() / 1000))}></Timer>
        </span>
    </div>;
}

export default ChatHeader;
