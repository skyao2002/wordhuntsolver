import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import GridForm from "./Components/GridForm";
import ArrowGrid from "./Components/ArrowGrid";
import AllWords from "./Components/AllWords";
import axios from "axios";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const Compress = require("compress.js");
const compress = new Compress();

async function resizeImageFn(file) {
  const resizedImage = await compress.compress([file], {
    size: 1, // the max size in MB, defaults to 2MB
    quality: 1, // the quality of the image, max is 1,
    maxWidth: 500, // the max width of the output image, defaults to 1920px
    resize: true, // defaults to true, set false if you do not want to resize the image width and height
  });
  const img = resizedImage[0];
  const base64str = img.data;
  const imgExt = img.ext;
  const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt);
  return resizedFiile;
}

function App() {
  const [file, setFile] = useState(null);
  const [letters, setLetters] = useState("");
  const [directions, setDirections] = useState([]);
  const [currWord, setCurrWord] = useState(null);
  const [currIdx, setCurrIdx] = useState(0);
  const [size, setSize] = useState(4);
  const [allDirections, setAllDirections] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);

  const url = "https://stevenyaooo.pythonanywhere.com";
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const url = "http://127.0.0.1:5000";
  // const url = "http://8408b4828030.ngrok.io";

  const handleSolveFile = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios.post(`${url}/solveimg`, formData).then(
        (response) => {
          setLetters(response.data.letters);
          setAllDirections(response.data.answer);
        },
        (error) => {
          console.log(error);
        }
      );
      setCurrIdx(0);
    }
  };

  // handles the solve with the grid
  function handleSolveLetters(letters) {
    if (letters != "") {
      setLetters(letters);
      axios
        .post(`${url}/solve`, {
          letters: letters,
          size: size,
        })
        .then(
          (response) => {
            setAllDirections(response.data.answer);
          },
          (error) => {
            console.log(error);
          }
        );
      setCurrIdx(0);
    }
  }

  useEffect(() => {
    if (letters != "" && allDirections != []) {
      setDirections(allDirections[currIdx][1]);
      setCurrWord(allDirections[currIdx][0]);
      setCurrIdx(currIdx + 1);
      // document.getElementsByName("next")[0].style.display = 'block';
    }
  }, [allDirections]);

  const handleClick = (data) => {
    // setLetters(data);
    handleSolveLetters(data);
  };
  const handleNext = () => {
    if (letters != "") {
      setDirections(allDirections[currIdx][1]);
      setCurrWord(allDirections[currIdx][0]);
      setCurrIdx(currIdx + 1);
    }
  };
  const handleFileChange = async (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      let file = await resizeImageFn(e.target.files[0]);
      console.log(file);

      reader.onload = function (e) {
        setImgPreview(e.target.result);
      };

      reader.readAsDataURL(file);

      setFile(file);
    }
  };
  return (
    <div className="bg-light">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="pl-3">
          Word Hunt Solver
        </Navbar.Brand>
      </Navbar>

      <Container className="p-3 bg-white">
        <Jumbotron>
          <h1>Never Lose WordHunt Again!</h1>
          <p>
            Simply enter the 16 letters of your word hunt board and watch as the
            solutions magically appear. Check out my YouTube for more quality
            content:
          </p>
          <Button
            href="https://www.youtube.com/channel/UCZDp6CvSxKBEKycW4dpHIJQ"
            variant="dark"
            size="lg"
          >
            Go to YouTube
          </Button>
        </Jumbotron>

        <Row>
          <Col md="6">
            <h1 className="text-center">Enter your letters</h1>
            <GridForm
              onClick={handleClick}
              nextClick={handleNext}
              currWord={currWord}
              size={size}
              letters={letters}
            />
            {!letters && (
              <form onSubmit={handleSolveFile}>
                <div className="text-center">
                  <h3>Or upload/take pic:</h3>
                  <div className="text-nowrap">
                    <input
                      type="file"
                      accept="image/*"
                      name="file"
                      onChange={handleFileChange}
                      className="w-75"
                    />
                    <input type="submit" className="w-25" />
                  </div>
                </div>
              </form>
            )}
            {imgPreview && <img src={imgPreview} alt="User" />}
          </Col>

          <Col md="6">
            <div className="parent px-1">
              <Grid letters={letters} />
              <div className="child">
                <ArrowGrid directions={directions} size={size} />
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <AllWords words={allDirections} />
        </div>
      </Container>
      <footer className="bg-dark text-light text-center text-xs p-3 absolute bottom-0 w-full to-bottom">
        &copy; Copyright Steven Yao 2020
      </footer>
    </div>
  );
}

export default App;
