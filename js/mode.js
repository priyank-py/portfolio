if(localStorage.getItem('mode_preferred')){
    const theme = localStorage.getItem('mode_preferred')
    if(theme=='dark'){
        button = 1
    } else {
        button = 0
    }
} else {
    button = 0
}

const btn = document.querySelector('#darkmode')
btn.addEventListener('click', () => {
    console.log(btn.checked)
    if(btn.checked){
        button = 1;
    } else {
        button = 0;
    }

    if(button){
        source = './css/bootstrap_darkly.min.css'
        localStorage.setItem('mode_preferred', 'dark')
    } else {
        source = './css/bootstrap_minty.min.css'
        localStorage.setItem('mode_preferred', 'light')
    }
    pageMode.setAttribute('href', source)
})

const pageMode = document.querySelector('link')

if(button){
    source = './css/bootstrap_darkly.min.css'
    localStorage.setItem('mode_preferred', 'dark')
} else {
    source = './css/bootstrap_minty.min.css'
    localStorage.setItem('mode_preferred', 'light')
}
pageMode.setAttribute('href', source)
