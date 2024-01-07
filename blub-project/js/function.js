// frist we did create a function and pass the parameter
function light(show) {
    //create the variable pic
    var pic;
// then we did put the condition if show parameter  is 0
    if(show === 0 ) {
        // execute that image
        pic = "./image/pic_bulboff.gif";
    } else { // else execute that image 
        pic = "./image/pic_bulbon.gif";
    }

    // that will assing(this store the source url image in pic variable) image src to pic variable and will show the image in myImage according to the condition
    document.getElementById("myImage").src = pic;
}

