import $ from 'jquery'

const applySticky = _ => {
    $(window).on('scroll', _ => {
        const header = $('header');
        const pos = header[0].offsetTop;
    
        if(window.pageYOffset > pos){
            header.addClass('sticky');
            
        } else {
            header.removeClass('sticky')
        }

        console.log('pos', pos)
    });
}

export default applySticky;