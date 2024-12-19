import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([height - marginBottom, marginTop]);
    
    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([marginLeft, width - marginRight]);
    
    useEffect(() => {
        if (svgRef.current) {
            const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);
            svg.attr("width", width).attr("height", height);

            svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(d3.axisBottom(x));
            
                svg.append("g")
                .attr("transform", `translate(${marginLeft},0)`)
                .call(d3.axisLeft(y));
            }
    });

    return <svg ref={svgRef}></svg>;
}

export default Graph