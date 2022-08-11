import Constant from "@util/Constant";

interface Params {
    key: string,
    option: string
}

interface ChatRoomArea {
    name: string,
    limit: number,
    n: number,
    hashtags: string[]
}

interface ResultElementProps {
    elementList: ChatRoomArea[]
}

// store.dispatch (axios)
function getResult(query: Params) {
    return [{
        name: "name",
        limit: 100,
        n: 3,
        hashtags: ["k-pop"]
    }
    ];
}

function ResultElement({ elementList }: ResultElementProps) {
    const element = elementList.map((element: ChatRoomArea) => (
        <table className="search-result-list">
            <thead>
                {element.name}
            </thead>
            <tbody>
                <p className="search-result-list room-banner">{Constant.LIMITATION}: {element.n}/{element.limit}</p>
            </tbody>
        </table>
    ));

    return (
        <div id="search-result-list">
            {element}
        </div>
    );
}

function SearchResultList({ key, option }: Params) {
    const results = getResult({ key: key, option: option });

    return (
        <ResultElement elementList={results}></ResultElement>
    )
}

export default SearchResultList;