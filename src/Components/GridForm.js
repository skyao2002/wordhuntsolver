import React, { useState } from "react";
import { useForm } from "react-hook-form";
import $ from "jquery";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GridForm(props) {
  const ALPHA_START = 65;
  const ALPHA_END = 90;
  const currWord = props.currWord;
  const size = props.size;

  const { register, handleSubmit, errors } = useForm();
  // const [ letters, setLetters ] = useState("");

  const onSubmit = (data) => {
    let combinedString = "";
    for (let i = 0; i < Math.pow(size, 2); i++) {
      let currValue = document.getElementsByName("letter")[i].value;
      if (currValue.toUpperCase() == currValue.toLowerCase()) {
        //not a letter
        return (
          <h1>
            You did not enter a character in one of the fields. Refresh the page
          </h1>
        );
      }
      combinedString += currValue.toUpperCase();
    }
    // setLetters(combinedString);
    props.onClick(combinedString);
  };

  const onNext = () => {
    props.nextClick();
  };

  const autoTab = (e) => {
    let tabindex = $(e.target).attr("tabindex") || 0;

    tabindex = Number(tabindex);
    let currValue = document.getElementsByName("letter")[tabindex].value;
    console.log(currValue);
    if (
      e.keyCode >= ALPHA_START &&
      e.keyCode <= ALPHA_END &&
      currValue !== ""
    ) {
      tabindex += 1;
    }
    const elem = $("[tabindex=" + tabindex + "]");
    if (elem[0]) {
      elem.focus();
    }
  };

  if (currWord == null)
    return (
      <Form
        id="forms"
        className="py-3 text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <table className="table table-bordered">
          <tbody>
            {Array.from({ length: size }).map((_, row) => (
              <tr key={row}>
                {Array.from({ length: size }).map((_, col) => (
                  <td key={row * size + col}>
                    <input
                      placeholder={props.letters.charAt(row * size + col)}
                      maxLength="1"
                      name="letter"
                      ref={register({ required: true })}
                      id={row * size + col}
                      tabIndex={row * size + col}
                      onKeyUp={autoTab}
                      type="text"
                      style={({ width: 0.15 + "em" }, { height: 2.15 + "em" })}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {errors.letter && <p>Some values are not filled</p>}
        <p>To reset all, refresh the page</p>
        <Button
          type="submit"
          tabIndex={Math.pow(size, 2)}
          variant="dark"
          size="lg"
        >
          Set Grid!
        </Button>
      </Form>
    );
  else
    return (
      <div>
        <Form
          id="forms"
          className="py-1 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Col lg="9">
              <table className="table table-bordered">
                <tbody>
                  {Array.from({ length: size }).map((_, row) => (
                    <tr key={row}>
                      {Array.from({ length: size }).map((_, col) => (
                        <td key={row * size + col}>
                          <input
                            defaultValue={props.letters.charAt(
                              row * size + col
                            )}
                            maxLength="1"
                            name="letter"
                            ref={register({ required: true })}
                            id={row * size + col}
                            tabIndex={row * size + col}
                            onKeyUp={autoTab}
                            type="text"
                            style={
                              ({ width: 0.15 + "em" }, { height: 2.15 + "em" })
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <Col lg="3">
              {errors.letter && <p>Some values are not filled</p>}
              <p>To reset all, refresh the page</p>
              <Button
                type="submit"
                tabIndex={Math.pow(size, 2)}
                variant="dark"
                size="lg"
              >
                Set Grid!
              </Button>
            </Col>
          </Row>
        </Form>

        <form className="text-center" name="next">
          <p>current word: </p> <h1> {currWord} </h1>
          <br />
          <Button variant="dark" onClick={() => onNext()}>
            Next Word!
          </Button>
          <p>Click once and then use SPACE or ENTER</p>
        </form>
      </div>
    );
}

export default GridForm;
