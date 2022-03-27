import React, { useState, useEffect, useRef } from "react";
import './ImageClassifier.style.scss'
import * as mobilenet from '@tensorflow-models/mobilenet'
import '@tensorflow/tfjs'

function App() {

  // use state
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [model, setModel] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [results, setResults] = useState([])
  const [history, setHistory] = useState([])

  // useRef
  const imageRef = useRef();
  const fileInputRef = useRef();

  // load model
  const loadModel = async () => {
    setIsModelLoading(true)
    try {
      const model = await mobilenet.load({ "version": 2, "alpha": 1.0 })
      setModel(model)
      setIsModelLoading(false)
    } catch (err) {
      console.log(err)
      setIsModelLoading(false)
    }
  }

  // upload image
  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  const identify = async () => {
    const results = await model.classify(imageRef.current)
    setResults(results)
  }

  const handleOnChange = (e) => {
    setImageURL(e.target.value)
    setResults([])
  }

  const triggerUpload = () => {
    fileInputRef.current.click()
  }

  // load model on the background
  useEffect(() => {

    loadModel()
    console.log('Load finish!')
  }, [])

  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history])
    }
  }, [imageURL])

  if (isModelLoading) {
    return <h2 className="loading"></h2>
  }

  return (
    <div className="Appz">
        <h1 className='header'>Image Classification - Mobilenet V2</h1>
        <div className='inputHolder'>
            <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage} ref={fileInputRef} />
            <button className='uploadImage' onClick={triggerUpload}>Upload Image</button>
            {imageURL && <button className='buttonz' onClick={identify}>Identify Image</button>}
        </div>
        <div className="mainWrapper">
            <div className="mainContent">
                <div className="imageHolder">
                    {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
                </div>
                {results.length > 0 && <div className='resultsHolder'>
                    {results.map((result, index) => {
                        return (
                            <div className='result' key={result.className}>
                                <span className='name'>{result.className}</span>
                                <span className='confidence'>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Best Guess</span>}</span>
                            </div>
                        )
                    })}
                </div>}
            </div>
            {/* {imageURL && <button className='buttonz' onClick={identify}>Identify Image</button>} */}
        </div>
        {history.length > 0 && <div className="recentPredictions">
            <h2>Recent Images</h2>
            <div className="recentImages">
                {history.map((image, index) => {
                    return (
                        <div className="recentPrediction" key={`${image}${index}`}>
                            <img src={image} alt='Recent Prediction' onClick={() => setImageURL(image)} />
                        </div>
                    )
                })}
            </div>
        </div>}
    </div>
);
}

export default App;
