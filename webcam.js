Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90,
    });

    Webcam.attach('#camera')

    function takeSnapshot(e){
        Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_Image' src='"+data_uri+"'/>"
        
    
        })
    }
    console.log("ml5version",ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0c9w3R8uk/model.json',modelLoaded);