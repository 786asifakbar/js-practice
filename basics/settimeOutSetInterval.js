setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);       


setInterval(() => {
  console.log("Hello every 3 seconds");
}, 3000);



console.log("This message appears first");


const timeoutId = setTimeout(() => {
  console.log("This will not appear");
}, 5000);

clearTimeout(timeoutId);
console.log("This message appears second");                 


const intervalId = setInterval(() => {
  console.log("This will appear every 4 seconds");
}, 4000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 13000);

window.addEventListener("load", (event) => {
  console.log("Page fully loaded:", event);
});

window.addEventListener("beforeunload", (event) => {
  console.log("Page is about to be unloaded:", event);
});
window.addEventListener("unload", (event) => {
  console.log("Page unloaded:", event);
});
window.addEventListener("focus", (event) => {   
    console.log("Window focused:", event);
});
    window.addEventListener("blur", (event) => {
    console.log("Window lost focus:", event);
});
window.addEventListener("visibilitychange", (event) => {
    console.log("Visibility changed. Document is now:", document.visibilityState);
});
window.addEventListener("scroll", (event) => {
    console.log("Window scrolled:", event);
});window.addEventListener("resize", (event) => {
    console.log("Window resized:", event);
});window.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event);
});window.addEventListener("keyup", (event) => {
    console.log("Key released:", event);
});window.addEventListener("mousemove", (event) => {
    console.log("Mouse moved:", event);
});window.addEventListener("click", (event) => {
    console.log("Window clicked:", event);
});window.addEventListener("dblclick", (event) => {
    console.log("Window double-clicked:", event);
});window.addEventListener("contextmenu", (event) => {
    console.log("Context menu opened:", event);
});window.addEventListener("scroll", (event) => {
    console.log("Window scrolled:", event);
});window.addEventListener("resize", (event) => {
    console.log("Window resized:", event);
});window.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event);
});window.addEventListener("keyup", (event) => {
    console.log("Key released:", event);
});window.addEventListener("mousemove", (event) => {
    console.log("Mouse moved:", event);
});window.addEventListener("click", (event) => {
    console.log("Window clicked:", event);
});
window.addEventListener("dblclick", (event) => {
    console.log("Window double-clicked:", event);
});
window.addEventListener("contextmenu", (event) => {
    console.log("Context menu opened:", event);
});
window.addEventListener("focus", (event) => {
    console.log("Window focused:", event);
});
window.addEventListener("blur", (event) => {
    console.log("Window lost focus:", event);
});
window.addEventListener("visibilitychange", (event) => {
    console.log("Visibility changed. Document is now:", document.visibilityState);
});
window.addEventListener("load", (event) => {
    console.log("Page fully loaded:", event);
});
window.addEventListener("beforeunload", (event) => {
    console.log("Page is about to be unloaded:", event);
});
window.addEventListener("unload", (event) => {
    console.log("Page unloaded:", event);
});
window.addEventListener("scroll", (event) => {
    console.log("Window scrolled:", event);
});
window.addEventListener("resize", (event) => {
    console.log("Window resized:", event);
});
window.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event);
});
window.addEventListener("keyup", (event) => {
    console.log("Key released:", event);
});
window.addEventListener("mousemove", (event) => {
    console.log("Mouse moved:", event);
});