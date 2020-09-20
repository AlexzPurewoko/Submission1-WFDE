import $ from 'jquery';

const applyRemoveSpaceAfterTranslate = _ => {
    const removeSpaceAfterTranslate = _ => {
        $('section.hero').css('height', `${$('#image__hero_main').height()}px`);
    }
    $(window).on('resize', _ => removeSpaceAfterTranslate() );
    removeSpaceAfterTranslate();
};

export default applyRemoveSpaceAfterTranslate;