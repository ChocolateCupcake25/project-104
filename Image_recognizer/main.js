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

    function check(){
        img=document.getElementById('captured_image');
        classifier.classify(img, gotResult);
    }

    function gotResult(error,result){
         if (error){
             console.error(error);
         } else{
             console.log(result);
             document.getElementById("result_object_name").innerHTML=result[0].label;
             document.getElementById("result_object_acuracy").innerHTML=result[0].confidence.toFixed(3);
         }
    }