import $ from 'jquery'

const applyNav = _ => {
    const navSlider = $('#nav-slider');
    const applyClick = e => {
        if(navSlider.hasClass('open')){
            navSlider.addClass('close');
            navSlider.removeClass('open');
        } else {
            navSlider.addClass('open');
            navSlider.removeClass('close');
        }
        e.stopPropagation();
    }
    $('#menu').on('click', applyClick);
    $('#nav-slider .nav-list').on('click', applyClick);
    $('main').on('click', applyClick);
}

export default applyNav;