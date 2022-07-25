

let packages = [{
  likelyToBeAbomb: true,
  heavy: true,
  dangerous: true,
  To: 'your mom',
  trackingNumber: '6666ab'
},

{
  likelyToBeAbomb: false,
  heavy: true,
  dangerous: false,
  To: 'your dad',
  trackingNumber: '6669ab'

},

{
  likelyToBeAbomb: true,
  heavy: true,
  dangerous: false,
  To: 'Zach',
  trackingNumber: '6668ab'

},

{
  likelyToBeAbomb: false,
  heavy: true,
  dangerous: true,
  To: 'Mickie-Mouse',
  trackingNumber: '6667ab'

},

{
  likelyToBeAbomb: true,
  heavy: true,
  dangerous: true,
  To: '',
  trackingNumber: '6666ab'

},

{
  likelyToBeAbomb: false,
  heavy: true,
  dangerous: false,
  To: 'zeus',
  trackingNumber: '6633ab'

},

{
  likelyToBeAbomb: false,
  heavy: false,
  dangerous: false,
  To: 'donald duck',
  trackingNumber: '6688ab'

}
]



function filterLikelyToBeAbomb() {
  packages = packages.filter(v => v.likelyToBeAbomb >= true)
  console.log('bomb');
  drawPackages()
}

function filterHeavy() {
  packages = packages.filter(v => v.heavy >= true)
  console.log('heavy');
  drawPackages()
}

function filterDangerous() {
  packages = packages.filter(v => v.dangerous >= true)
  console.log('danger!');
  drawPackages()
}

function drawPackages() {
  let template = ''
  packages.forEach(v => template += `<div class="col-4 btn btn-primary" onclick= ('${v.}')">${v.}</div>`)
  let packagesElm = document.getElementById('packages')
  // @ts-ignore
  packagesElm.innerHTML = template
}


function () {
  let missingPackages = packages[Math.floor(Math.random() * packages.length)]
  console.log('rando',);
  .guilty = true
}
