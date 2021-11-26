import { connector } from '@store/chat/state'

interface RoomBannerProps {
    id: number
    title: string
    limit: number
    current: number
}

function Chat(
    data: RoomBannerProps
): (JSX.Element | null) {
    if (data === undefined) return null;
    return (
        <div className="room-banner">
            <span className="title">제목: {data.title}</span>
            <span className="limit">정원: {data.limit} / {data.current}</span>
        </div>
    );
}

export default connector(Chat);