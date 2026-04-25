async function predict(){
    let traffic = document.getElementById("traffic").value;
    let rain = document.getElementById("rain").value;

    let resultBox = document.getElementById("result");
    resultBox.innerText = "Analyzing...";
    resultBox.style.color = "yellow";

    let res = await fetch(`http://127.0.0.1:8000/predict?traffic_count=${traffic}&rain=${rain}`);
    let data = await res.json();

    let prediction = data.prediction;

    resultBox.innerText = "Prediction: " + prediction;

    if(prediction.includes("Heavy")){
        resultBox.style.color = "red";
    } else {
        resultBox.style.color = "lightgreen";
    }
    resultBox.className = "result";

    if(prediction.includes("Heavy")){
    resultBox.classList.add("high");
    } else {
    resultBox.classList.add("low");
    }
}

async function analyze(){
    let report = document.getElementById("report").value;

    let analysisBox = document.getElementById("analysis");
    analysisBox.innerText = "Analyzing with AI...";
    analysisBox.style.color = "yellow";

    let res = await fetch(`http://127.0.0.1:8000/analyze?report=${report}`);
    let data = await res.json();

    analysisBox.innerText = data.analysis;
    analysisBox.style.color = "#00ffcc";
}