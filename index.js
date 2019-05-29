function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild () {
    return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
     list[i].innerHTML = list[i] * n
  }
}
