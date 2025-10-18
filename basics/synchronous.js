  const button = document.getElementById("myButton");
  button.addEventListener("click", (event) => {
      console.log("Button clicked:", event);
  });
    const anotherButton = document.getElementById("anotherButton");
    anotherButton.addEventListener("click", (event) => {
        console.log("Another button clicked:", event);
    }); 
    window.addEventListener("resize", (event) => {
        console.log("Window resized:", event);
    }); 
    window.addEventListener("scroll", (event) => {
        console.log("Window scrolled:", event);
    }); 
    window.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event);
    });