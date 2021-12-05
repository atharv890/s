Webcam.set({
   height:200,
   width:300,
   image_format:"png",
   png_quality:90
   });
   Webcam.attach("#camera");
function submit(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='image'>";   
}
)
}
console.log("ml5version",ml5.version);
yo=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IAG2qh3eC/model.json",modelloaded);
function modelloaded(){
console.log("modal is loaded you can fire over and out")
}
function hi(){
photo=document.getElementById("image");
yo.classify(photo,imager);
}
function imager(error,results){
if (error){
console.log(error);
}
else{
console.log(results);
document.getElementById("number1").innerHTML=results[0].label;
document.getElementById("number2").innerHTML=(results[0].confidence.ToFixed(3))*100+"%";
voice=window.speechSynthesis;
voice3="This the emoji"+results[0].label;
voice2=SpeechSynthesisUtterance(voice3);
voice.speak(voice2);
}
}