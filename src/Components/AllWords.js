import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AllWords(props) {
    let words = props.words

    if(Array.isArray(words) && words.length == 0)
        return(
            <div></div>
        )
    else {
        return(
            <div className="border border-dark rounded">
                <h3>All Words</h3>
                <Row>
                    {words.map((row, indexR) => (
                        <Col key={row} xs="6" sm="4" md="3" lg="2">
                            {row[0]}
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

}

export default AllWords;
