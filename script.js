const homeBtn = document.querySelector('[data-ctrl-one]')
const bioBtn = document.querySelector('[data-ctrl-two]')
const portBtn = document.querySelector('[data-ctrl-three]')
const mediaBtn = document.querySelector('[data-ctrl-four]')
const resoBtn = document.querySelector('[data-ctrl-five]')
const contactBtn = document.querySelector('[data-ctrl-six]')


const homeSec = document.querySelector('[data-sec-one]')
const bioSec = document.querySelector('[data-sec-two]')
const portSec = document.querySelector('[data-sec-three]')
const mediaSec = document.querySelector('[data-sec-four]')
const resoSec = document.querySelector('[data-sec-five]')
const contactSec = document.querySelector('[data-sec-six]')

const messageReply = document.querySelector('[data-msg-reply]')
const submitBtn = document.querySelector('[data-submit-btn]')


homeBtn.addEventListener('click', homeBtnClick)

function homeBtnClick() {
    console.log("home clicked")
    homeSec.classList.remove('hide')
    bioSec.classList.add('hide')
    portSec.classList.add('hide')
    mediaSec.classList.add('hide')
    resoSec.classList.add('hide')
    contactSec.classList.add('hide')
    homeBtn.classList.add('active')
    bioBtn.classList.remove('active')
    portBtn.classList.remove('active')
    mediaBtn.classList.remove('active')
    resoBtn.classList.remove('active')
    contactBtn.classList.remove('active')
}

bioBtn.addEventListener('click', bioBtnClick)

function bioBtnClick() {
    console.log("bio clicked")
    homeSec.classList.add('hide')
    bioSec.classList.remove('hide')
    portSec.classList.add('hide')
    mediaSec.classList.add('hide')
    resoSec.classList.add('hide')
    contactSec.classList.add('hide')
    homeBtn.classList.remove('active')
    bioBtn.classList.add('active')
    portBtn.classList.remove('active')
    mediaBtn.classList.remove('active')
    resoBtn.classList.remove('active')
    contactBtn.classList.remove('active')
}

portBtn.addEventListener('click', portBtnClick)

function portBtnClick() {
    console.log("port clicked")
    homeSec.classList.add('hide')
    bioSec.classList.add('hide')
    portSec.classList.remove('hide')
    mediaSec.classList.add('hide')
    resoSec.classList.add('hide')
    contactSec.classList.add('hide')
    homeBtn.classList.remove('active')
    bioBtn.classList.remove('active')
    portBtn.classList.add('active')
    mediaBtn.classList.remove('active')
    resoBtn.classList.remove('active')
    contactBtn.classList.remove('active')
}

mediaBtn.addEventListener('click', mediaBtnClick)

function mediaBtnClick() {
    console.log("media clicked")
    homeSec.classList.add('hide')
    bioSec.classList.add('hide')
    portSec.classList.add('hide')
    mediaSec.classList.remove('hide')
    resoSec.classList.add('hide')
    contactSec.classList.add('hide')
    homeBtn.classList.remove('active')
    bioBtn.classList.remove('active')
    portBtn.classList.remove('active')
    mediaBtn.classList.add('active')
    resoBtn.classList.remove('active')
    contactBtn.classList.remove('active')
}

resoBtn.addEventListener('click', resoBtnClick)

function resoBtnClick() {
    console.log("reso clicked")
    homeSec.classList.add('hide')
    bioSec.classList.add('hide')
    portSec.classList.add('hide')
    mediaSec.classList.add('hide')
    resoSec.classList.remove('hide')
    contactSec.classList.add('hide')
    homeBtn.classList.remove('active')
    bioBtn.classList.remove('active')
    portBtn.classList.remove('active')
    mediaBtn.classList.remove('active')
    resoBtn.classList.add('active')
    contactBtn.classList.remove('active')
}

contactBtn.addEventListener('click', contactBtnClick)

function contactBtnClick() {
    console.log("contact clicked")
    homeSec.classList.add('hide')
    bioSec.classList.add('hide')
    portSec.classList.add('hide')
    mediaSec.classList.add('hide')
    resoSec.classList.add('hide')
    contactSec.classList.remove('hide')
    homeBtn.classList.remove('active')
    bioBtn.classList.remove('active')
    portBtn.classList.remove('active')
    mediaBtn.classList.remove('active')
    resoBtn.classList.remove('active')
    contactBtn.classList.add('active')
}

const firstName = document.getElementById('firstNameInput')
const lastName = document.getElementById('lastNameInput')
const eMail = document.getElementById('emailInput')
const message = document.getElementById('messageInput')

submitBtn.addEventListener('click', submitFunc)

function submitFunc() {
    alert("Thank you! Your Message Has Been Sent")
    firstName.value = ""
    lastName.value = ""
    eMail.value = ""
    message.value = ""
}