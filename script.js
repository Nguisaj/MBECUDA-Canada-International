const images = new Image();
   
   


let newImage = new Image();
newImage.src = '(images/palace.jfif), (images/image-1.jfif), (images/bridge.jfif)' ;
imageArray.push(newImage);
document.body.style.backgroundImage = `url(${images[0]})`
transition: background-image 1s;
window.onload = () => {
    // preloading
    document.body.style.backgroundImage = `url(${images[0]})`
    document.querySelector('.hidden').src = images[1]
    let i = 1
    setInterval(() => {
      document.body.style.backgroundImage = `url(${images[i++]})`
  
      if (i === images.length) i = 0
      else {
        // preload the next image, so that it transitions smoothly
        document.querySelector('.hidden').src = images[i]
      }
    }, 7000)
  }


  <button onclick="JavaScript:alert('I intend to live forever. So far, so good. Steven Wright.')">Submit</button>
