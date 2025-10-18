
    document.addEventListener("click", (event) => {
        console.log("Document clicked:", event);
    }); 
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
    }
    );; 
    window.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event);
    });     
    window.addEventListener("keyup", (event) => {
        console.log("Key released:", event);
    });
    const inputField = document.getElementById("inputField");
    inputField.addEventListener("input", (event) => {
        console.log("Input field changed:", event);
    });
    inputField.addEventListener("focus", (event) => {
        console.log("Input field focused:", event);
    });
    inputField.addEventListener("blur", (event) => {
        console.log("Input field lost focus:", event);
    });
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Form submitted:", event);
    });
    form.addEventListener("reset", (event) => {
        console.log("Form reset:", event);
    }); 
    const link = document.getElementById("myLink");
    link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Link clicked:", event);
    });
    link.addEventListener("mouseover", (event) => {
        console.log("Link mouseover:", event);
    }
    );
    link.addEventListener("mouseout", (event) => {
        console.log("Link mouseout:", event);
    });     
    const image = document.getElementById("myImage");
    image.addEventListener("load", (event) => {
        console.log("Image loaded:", event);
    });
    image.addEventListener("error", (event) => {
        console.log("Image load error:", event);
    });     
    const paragraph = document.getElementById("myParagraph");
    paragraph.addEventListener("copy", (event) => {
        console.log("Paragraph copied:", event);
    });
    paragraph.addEventListener("cut", (event) => {
        console.log("Paragraph cut:", event);
    });
    paragraph.addEventListener("paste", (event) => {
        console.log("Paragraph pasted:", event);
    }); 
    const video = document.getElementById("myVideo");
    video.addEventListener("play", (event) => {
        console.log("Video played:", event);
    });
    video.addEventListener("pause", (event) => {
        console.log("Video paused:", event);
    });
    video.addEventListener("ended", (event) => {
        console.log("Video ended:", event);
    });
    const audio = document.getElementById("myAudio");
    audio.addEventListener("play", (event) => {
        console.log("Audio played:", event);
    });
    audio.addEventListener("pause", (event) => {
        console.log("Audio paused:", event);
    });
    audio.addEventListener("ended", (event) => {
        console.log("Audio ended:", event);
    });     const table = document.getElementById("myTable");
    table.addEventListener("click", (event) => {
        console.log("Table clicked:", event);
    });
    table.addEventListener("mouseover", (event) => {
        console.log("Table mouseover:", event);
    });
    table.addEventListener("mouseout", (event) => {
        console.log("Table mouseout:", event);
    });
    const listItem = document.getElementById("myListItem");
    listItem.addEventListener("click", (event) => {
        console.log("List item clicked:", event);
    });
    listItem.addEventListener("mouseover", (event) => {
        console.log("List item mouseover:", event);
    });
    listItem.addEventListener("mouseout", (event) => {
        console.log("List item mouseout:", event);
    });     const divElement = document.getElementById("myDiv");
    divElement.addEventListener("click", (event) => {
        console.log("Div clicked:", event);
    });
    divElement.addEventListener("dblclick", (event) => {
        console.log("Div double clicked:", event);
    });