// Set Constants
const bypass = "https://github.com/Bypass-Central"
const hostingtxt = "This was created by Bypass Central."
const gitxt = "Github"

// Function for open video
function openVideo(nocookievideoLink) {
var win = window.open()
var url = nocookievideoLink
var iframe = win.document.createElement('iframe')
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.src = url
win.document.body.appendChild(iframe)
win.document.write(hostingtxt)
}
