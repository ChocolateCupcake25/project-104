webcam.set({
    width: 350,
    hieght: 300,
    img_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");
webcam.attatch('#camera')

function take_snapshot(){
    webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML='img id="Captured_image" src="'+data_uri+'"/>';
    })}

    console.log('ml5 version:', ml5.version);
    classifier= ml5.imgclassifier('https://teachablemachine.withgoogle.com/models/lZzwjys0X/',modelloaded);

    function modelloaded(){
        console.log('Model Loaded!');
    }