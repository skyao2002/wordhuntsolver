import React from 'react'

function ArrowGrid(props) {
  let directions = props.directions
  let size = props.size

  if(Array.isArray(directions) && directions.length == 0){
    return (
      <div></div>
    )
  }

  let points = []
  let r1 = Math.floor(directions[0]/size);
  let c1 = directions[0]%size;
  for(let i = 1; i < directions.length; i++) {
    let r2 = Math.floor(directions[i]/size)
    let c2 = directions[i]%size

    let x1 = (c1)*100 + 50;
    let y1 = (r1)*100 + 50;
    let x2 = (c2)*100 + 50;
    let y2 = (r2)*100 + 50;

    points.push([x1, y1, x2, y2]);
    console.log(x1, y1, x2, y2)

    r1 = Math.floor(directions[i]/size)
    c1 = directions[i]%size
  }

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className='mt-2'>
        <circle cx={points[0][0]} cy={points[0][1]} r="15" stroke="black" strokeWidth="3" fill="red" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
          refX="0" refY="3.5" orient="auto" >
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffcc99" stroke="black"/>
          </marker>
        </defs>

        {points.map((row, indexR) => (
          <line x1={row[0]} y1={row[1]} x2={row[2]} y2={row[3]} stroke="#990000" 
          strokeWidth="2" markerEnd="url(#arrowhead)" key={indexR}/>
        ))}
        {/* <line x1="50" y1="50" x2="250" y2="50" stroke="#000" 
        strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="200" y1="150" x2="250" y2="50" stroke="#000" 
        strokeWidth="2" markerEnd="url(#arrowhead)" /> */}
      </svg>
    </div>
    
  )
}

export default ArrowGrid