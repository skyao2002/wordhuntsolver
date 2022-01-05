import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Grid.css'
// import Arrow from '@elsdoerfer/react-arrow';

function Grid(props) {
    let letters = props.letters
    let grid = [["", "", "", ""], ["", "", "", ""],["", "", "", ""],["", "", "", ""]]
    let size
    setGrid(letters);

    function setGrid(letters) {
        console.log("set grid called " + letters)
        if(letters == null) {
            grid = [["", "", "", ""], ["", "", "", ""],["", "", "", ""],["", "", "", ""]]
            size = 4
            return;
        }
        size = Math.round(Math.sqrt(letters.length))
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                grid[i][j] = letters.charAt(i*size+j)
            } 
        }
        console.log("set grid to values")
    }


    return (
        <div>
            {grid.map((row, indexR) => (
                <Row key={indexR}>
                    {row.map((value, indexC) => (
                        <Col className='p-1' key={indexR * size +indexC}>
                            <div className='square' >
                                <h1 className='text-center letter'>{value}</h1>
                            </div>
                            
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    )
}

export default Grid;
