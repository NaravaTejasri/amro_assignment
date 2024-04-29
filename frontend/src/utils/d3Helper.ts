import { tree } from "d3-hierarchy";
import { select } from "d3";
import { ref } from "vue";

//ref to hold the clicked data
export const clickedData = ref(null);

export function treeLayout(treeData: any) {
  //Generate the tree diagram
  return tree().size([800, 200])(treeData);
}

export function updateGraph(graphData: any) {
  const nodes = select("svg g.nodes")
    .selectAll("g.node")
    .data(graphData.descendants(), (d: any) => d.data.id)
    .join("g")
    .classed("node", true)
    .attr("transform", function (d: any) {
      return `translate(${d.x - 45}, ${d.y - 35})`;
    });

  // Append rectangles for each node
  nodes
    .append("rect")
    .attr("width", 90)
    .attr("height", 70)
    .on("click", function (event, d: any) {
      clickedData.value = d.data;
      nodes
        .selectAll("rect")
        .style("fill", (nodeData: any) =>
          nodeData.data === clickedData.value ? "rgb(43, 91, 43)" : "steelblue"
        );
    })
    .style("cursor", "pointer")
    .style("stroke", "none")
    .style("fill", (d: any) =>
      d.data === clickedData.value ? "rgb(43, 91, 43)" : "steelblue"
    );

  // Append text label for each node
  nodes
    .append("text")
    .attr("dy", "0.35em")
    .attr("x", 45)
    .attr("y", 35)
    .style("text-anchor", "middle")
    .style("alignment-baseline", "middle")
    .text(function (d: any) {
      return d.data.name;
    });

  // Select links and draw them
  select("svg g.links")
    .selectAll("line.link")
    .data(graphData.links())
    .join("line")
    .classed("link", true)
    .style("stroke", "#ccc")
    .style("stroke-width", "1px")
    .attr("x1", function (d: any) {
      return d.source.x;
    })
    .attr("y1", function (d: any) {
      return d.source.y;
    })
    .attr("x2", function (d: any) {
      return d.target.x;
    })
    .attr("y2", function (d: any) {
      return d.target.y;
    });
}

// Retrieve clicked data from local storage if exists
const storedClickedData = localStorage.getItem("clickedData");
if (storedClickedData) {
  clickedData.value = JSON.parse(storedClickedData);
}
