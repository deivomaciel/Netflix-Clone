const callNextItem = trail => {
    const btnContainerLeft = document.querySelectorAll('.btn-container-left')
    const btnContainer = document.querySelectorAll('.btn-container')
    const itens = document.querySelectorAll('.contents')
    const leftBtn = document.querySelectorAll('.next-item-btn')
    const rightBtn = document.querySelectorAll('.last-item-btn')
    let counter = 0

    leftBtn[trail].addEventListener('click', () => {
        itens[trail].scrollBy(50, 0)
    })

    rightBtn[trail].addEventListener('click', () => {
        itens[trail].scrollBy(-50, 0)
    })
}

callNextItem(0)
callNextItem(1)
callNextItem(2)
callNextItem(3)