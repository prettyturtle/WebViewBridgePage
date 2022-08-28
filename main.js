const textInput = document.querySelector(".text-input")

function 앱에서_호출하는_함수1() {
  textInput.innerText = "앱에서 호출하는 함수1이 호출됨!"
  return "앱에서 호출하는 함수1이 호출됨!"
}
function 앱에서_호출하는_함수2(input) {
  textInput.innerText = `앱에서 호출하는 함수2, ${ input }이 호출됨!`
  return ["앱에서 호출하는 함수2이 호출됨!", input]
}
function 앱에서_호출하는_함수3(input1, input2) {
  textInput.innerText = `앱에서 호출하는 함수3, ${ input1 }, ${ input2 }이 호출됨!`
  return ["앱에서 호출하는 함수3이 호출됨!", input1, input2]
}

function 웹에서_호출하는_함수1() {
  textInput.innerText = "웹에서 호출하는 함수1이 호출됨!"
  webkit.messageHandlers.WebViewBridge.postMessage("웹에서 호출하는 함수1이 호출되었습니다.")
}
function 웹에서_호출하는_함수2() {
  textInput.innerText = "웹에서 호출하는 함수2이 호출됨!"
  webkit.messageHandlers.WebViewBridge.postMessage("웹에서 호출하는 함수2이 호출되었습니다.")
}
function 웹에서_호출하는_함수3() {
  textInput.innerText = "웹에서 호출하는 함수3이 호출됨!"
  webkit.messageHandlers.WebViewBridge.postMessage("웹에서 호출하는 함수3이 호출되었습니다.")
}

setTimeout(() => {
  webkit.messageHandlers.WebViewBridge.postMessage("2초 뒤에 호출되는 함수")
}, 2000)