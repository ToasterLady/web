var textarea=document.getElementById("text_area"); // get textbox ID
function enlargeText(){
    textarea.style.fontSize="24pt"; // Make text in box 24px font size
}

document.getElementsByName("fancify")[0].addEventListener("change",function(){
    textarea.style.textDecoration="underline" // Underline text
    textarea.style.fontWeight="bold"; // Make text bold
    textarea.style.color="blue"; // Make text blue
    alert("Text has been fancified!"); // Dialogue box
})

document.getElementsByName("fancify")[1].addEventListener("change",function(){
    textarea.style.textDecoration="none" // Remove underline
    textarea.style.fontWeight="normal"; // Normal text no bold
    textarea.style.color="black"; // Return text back to bold
    alert("Unfancified your text. :("); // Dialogue box
})

function mooText(){
    textarea.style.textTransform="uppercase" // Set textbox characters to uppercase
    let str=textarea.value.split("."); // Identified split as '.'
    let str2=str.join("-Moo"); // Add -Moo after each '.'
	textarea.value=str2;
	alert("MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"); // Dialogue box
}