function calculate(){
    var name1 = document.querySelector("#name1").value;
    var name2 = document.querySelector("#name2").value;
    if(name1 ==="" || name2 === ""){
        alert("Please Enter a name :)");}

    else if(name1.length < 4 || name2.length < 4){
        alert("Enter minimum 4 character:(");}

    else{
        var randomNumber = Math.floor(Math.random() * 100) + 1;

        document.querySelector(".calc").innerHTML = randomNumber + "💖%";
    }

    if(randomNumber <= 30)
        document.querySelector(".msg").innerHTML = "Dear, "+ name1 +"🤩and "+ name2+ "😍 are poor🙁 pair";
    else if(randomNumber <=60)
        document.querySelector(".msg").innerHTML = "Dear, "+ name1 +"🤩and "+ name2+ "😍 are Perfect🤗 pair";
    else if(randomNumber <=80)
        document.querySelector(".msg").innerHTML = "Dear, "+ name1 +"🤩and "+ name2+ "😍 are Beatifull😘 pair";
    else if(randomNumber >=95)
        document.querySelector(".msg").innerHTML = "Dear, "+ name1 +"🤩and "+ name2+ "😍 are Matching pair💏";
}