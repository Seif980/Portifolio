function mudaimagem() {
    if (document.getElementById("imagemclick").src == "file.jpg"){
        document.getElementById("imagemclick").src = "file2.png";
    } else {
        document.getElementById("imagemclick").src = "file.jpg";
    }
}
function noturno() {
    if (document.getElementById("logimg").src == "PHR.png"){
        document.getElementById("logimg").src = "PHRB.png"
    } else {
        (document.getElementById("logimg").src = "PHR.png")
    }
}