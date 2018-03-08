function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let array = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < array.length; i++) {
     array[i].innerHTML = i + n
  }
  return array
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
