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
  console.log("웹에서_호출하는_함수1")
}
function 웹에서_호출하는_함수2() {
  console.log("웹에서_호출하는_함수2")
}
function 웹에서_호출하는_함수3() {
  console.log("웹에서_호출하는_함수3")
}