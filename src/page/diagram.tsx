import go from "gojs"

function Diagram() {
    const myDiagram = new go.Diagram("myDiagramDiv");
    return (
        <div>
        <script src="go-debug.js"></script>
        <div id="myDiagramDiv" style={{"width":"400px", "height":"150px", "backgroundColor": "#DAE4E4"}}></div>
        </div>
    );
}

export default Diagram;