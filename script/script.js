
const sliderArrowWrapper = document.querySelector( '.slider__arrow-wrapper' )
const sliderListOptions = document.querySelector( '.slider__list--options' )

let sliderItemImgActive = document.querySelector( '.slider__item--img' )
let sliderItemOptionsActive = document.querySelector( '.slider__button--options' )
let imgIndex = 0

const chooseItemImg = ( tag ) => {

    if( sliderItemImgActive ) {
        sliderItemImgActive.classList.remove( 'active' )
        sliderItemImgActive = null
    }

    const { target : { dataset: { slider : buttonSelect } } } = tag


    sliderItemImgActive = document.querySelectorAll( '.slider__item--img' )[ +buttonSelect ]
    sliderItemImgActive.classList.add( 'active' )

}

const chooseItemOptions = ( tag ) => {
    if( sliderItemOptionsActive ){
        sliderItemOptionsActive.classList.remove( 'active' )
        sliderItemOptionsActive = null
    }
    
    sliderItemOptionsActive = tag.target
    sliderItemOptionsActive.classList.add( 'active' )
}

const chooseItemImgAutomatic = ( index ) => {

    if( sliderItemImgActive ) {
        sliderItemImgActive.classList.remove( 'active' )
        sliderItemImgActive = null
    }

    sliderItemImgActive = document.querySelectorAll( '.slider__item--img' )[ index ]
    sliderItemImgActive.classList.add( 'active' )

}

const chooseItemOptionsAutomatic = ( index ) => {
    if( sliderItemOptionsActive ){
        sliderItemOptionsActive.classList.remove( 'active' )
        sliderItemOptionsActive = null
    }
    
    sliderItemOptionsActive = document.querySelectorAll( '.slider__button--options' )[ index ]
    sliderItemOptionsActive.classList.add( 'active' )
}

const imgAutomatic = () => {
    
    setInterval( () => {
    
        if( imgIndex == 3 )
        imgIndex = 0
        
        chooseItemImgAutomatic( imgIndex )
        chooseItemOptionsAutomatic( imgIndex )
    
        imgIndex++
    
    }, 3000 )

}


sliderListOptions.addEventListener( 'click', ( e ) => {
    
    const { target: { dataset : { slider:index } } } = e 
    imgIndex = +index

    chooseItemImgAutomatic( imgIndex )
    chooseItemOptionsAutomatic( imgIndex )

} )

sliderArrowWrapper.addEventListener( 'click', ( e ) => {

    const { target: { dataset : { slider:index } } } = e 

    let result = imgIndex + ( +index )

    if( result == 3 ) result = 0
    else if( result == -1 ) result = 2

    imgIndex = result

    chooseItemImgAutomatic( imgIndex )
    chooseItemOptionsAutomatic( imgIndex )

} )

imgAutomatic()


