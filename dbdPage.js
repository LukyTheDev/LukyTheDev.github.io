/* hamburger animation */

const hamburger = document.querySelector('.hamburger')
const tentMenu = document.querySelector('.tent-menu')
const firstHpart = document.querySelector('.hamburger-part1')
const secondHpart = document.querySelector('.hamburger-part2')
const thirdHpart = document.querySelector('.hamburger-part3')

let menuStatus = false

hamburger.addEventListener('click', () => {
    if (menuStatus === false) {
        tentMenu.style.transform = "scaleX(1)"
        firstHpart.classList.add('firstHpartAnimation')
        hamburger.classList.add('noGap')
        secondHpart.classList.add('disappear')
        thirdHpart.classList.add('thirdHpartAnimation')
        menuStatus = true
        
    }
    else {
        tentMenu.style.transform = "scaleX(0)"
        firstHpart.classList.remove('firstHpartAnimation')
        hamburger.classList.remove('noGap')
        secondHpart.classList.remove('disappear')
        thirdHpart.classList.remove('thirdHpartAnimation')
        menuStatus = false
    }
    
})

//////////////////////////////////////////////////////loader/////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {

    // aniamzione loader
    setTimeout(() => {
        document.querySelector('body').style.overflow = "visible"
        document.querySelector('.loader').classList.add('nOpacity')
    }, 2550)

    // preset scritta 
    categoria.innerHTML = `${secondContentInner[0].categoria}`
    descrizione.innerHTML = `${secondContentInner[0].descrizione}`
})

window.addEventListener('resize', ()=> {
    if (window.window.innerWidth > 1050) {
        tentMenu.style.transform = "scaleX(0)"
        menuStatus = false
    }
})

/* content changes in time */

const imgRight = document.querySelector('.right-img')
const imgLeft = document.querySelector('.left-img')
const secondContentTitle = document.querySelector('.content2-title-changer')
const secondContentParagraph = document.querySelector('.content2-paragraph-changer')

const content2Changes = [{
    id:1,
    imgLeft : '/Assets/utilities/PG/blight.png',
    imgRight : '/Assets/utilities/PG/detective.png',
    title : 'Community',
    paragraph : 'Collegati con le altre community di dbd del mondo tramite il nostro server e gioca con chi vuoi. 🌍'
},{
    id:2,
    imgLeft : '/Assets/utilities/PG/ghost.png',
    imgRight : '/Assets/utilities/PG/jane.png',
    title : 'Coaching',
    paragraph : 'Sei nuovo? Ti piace imparare? Entra nella nostra sezione coaching ed inizia a migliorare grazie ai nostri high rank players! 🤯'
},{
    id:3,
    imgLeft : '/Assets/utilities/PG/kate.png',
    imgRight : '/Assets/utilities/PG/hillbilly.png',
    title : 'Eventi',
    paragraph : 'Partecipa ai nostri tornei e lotta per vincere un fantastico premio, esprimi la tua opinione senza paura nei nostri podcast e trascorri una serata tra gamers. 🏆'
},{
    id:4,
    imgLeft : '/Assets/utilities/PG/feng.png',
    imgRight : '/Assets/utilities/PG/trapper.png',
    title : 'Streamer',
    paragraph : 'Gioca con gli streamer più amati dalla community di dbd Italia e fai parte delle loro live su twitch🎬'
},]

let currentContent2Item = 0
let currentContent2Slide = content2Changes[currentContent2Item]

/* alert other pages */

let pages =  document.querySelectorAll('.menu a')
let pages2 = document.querySelectorAll('.tent-menu a')
pages.forEach(page => {
    page.addEventListener('click', e => {
        e.preventDefault;
        alert(`Scusaci, il nostro sito è ancora in fase di programmazione.😅`)
    })
})
pages2.forEach(page => {
    page.addEventListener('click', e => {
        e.preventDefault;
        alert(`Scusaci, il nostro sito è ancora in fase di programmazione.😅`)
    })
})

//////////////////////////////////////////////////////go to top after reloading/////////////////////////////////

window.addEventListener('beforeunload', () => {
    window.scrollTo(0,0)
})

/* windows content loaded */

window.addEventListener('DOMContentLoaded' ,() => {

    imgLeft.src = currentContent2Slide.imgLeft
    imgRight.src = currentContent2Slide.imgRight
    secondContentTitle.textContent = currentContent2Slide.title
    secondContentParagraph.textContent = currentContent2Slide.paragraph
    setInterval(function() {
        if (currentContent2Item === 3) {
            currentContent2Item = 0
        }
        else {
            currentContent2Item = currentContent2Item + 1 
        }
    currentContent2Slide = content2Changes[currentContent2Item]
    imgLeft.src = currentContent2Slide.imgLeft
    imgRight.src = currentContent2Slide.imgRight
    secondContentTitle.textContent = currentContent2Slide.title
    secondContentParagraph.textContent = currentContent2Slide.paragraph
    }, 10000);
    
    
})
