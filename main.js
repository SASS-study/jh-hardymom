const gnbDepth1 = document.querySelector(".gnb-depth1")
const gnbDepth2All = document.querySelectorAll(".gnb-depth2")
const navigation = document.querySelector(".navigation")

// gnb-depth1에 마우스오버시 depth2 보이기
function gnbControl() {
  gnbDepth1.addEventListener("mouseover", function calcMaxHeight() {
    gnbDepth2All.forEach((gnbDepth2) => {
      console.log(gnbDepth2)
    })
  })
}
gnbControl()
function calcMaxHeight() {
  gnbDepth2All.forEach((gnbDepth2) => {
    console.log(gnbDepth2)
  })
}