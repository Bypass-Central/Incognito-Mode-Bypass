// Set Constants
const bypass = "https://github.com/Bypass-Central"
const hostingtxt = "This was created by Bypass Central."
const gitxt = "Github"

// Function for open video
function openGame() {
var win = window.open()
var url = "https://www.youtube-nocookie.com/embed/vFNmrGaV6YQ"
var iframe = win.document.createElement('iframe')
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.botton = "0";
iframe.style.right = "0";
iframe.style.position = "fixed";
iframe.style.margin = "0";
iframe.style.padding = "0";
iframe.style.overflow = "hidden";
iframe.src = url
win.document.body.appendChild(iframe)
}
