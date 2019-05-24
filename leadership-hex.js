var source   = document.getElementById("form-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
    skills: [
        {id: 'skill1', label: {top: 85, left: 0}, marker: {top: 85, left: 390}},
        {id: 'skill2', label: {top: 315,left: 705}, marker: {top: 315,left: 705}},
        {id: 'skill3', label: {top: 665, left: 600}, marker: {top: 695, left: 582}},
        {id: 'skill4', label: {top: 665, left: 0}, marker: {top: 695, left: 195}},
        {id: 'skill5', label: {top: 315, left: -200}, marker: {top: 315, left: 60}},
    ],
    markercenter: {
        top: 380,
        left: 390,
    }
  };
var form_html = template(context);

var main_template = Handlebars.compile(document.getElementById("main-template").innerHTML);
var main_html = main_template(context);

const num_steps = 10;


$(document).ready(function() {
    $('form').html(form_html);
    $('#main').html(main_html);

    $('form').on('input', '.slider', function(e){
        const slider_val = $(this).val();
        const marker_selector = '#'+$(this).data('skill')+'-marker';
        const max_top = $(marker_selector).data('max-top');
        const new_top = context.markercenter.top - ((slider_val - 1) * (context.markercenter.top - max_top)/num_steps);
        const max_left = $(marker_selector).data('max-left');
        const new_left = context.markercenter.left - ((slider_val - 1) * (context.markercenter.left - max_left)/num_steps);

        $(marker_selector).css('top', new_top+"px");
        $(marker_selector).css('left', new_left+"px");
        $(this).siblings('.slider-val').text(slider_val);
    });

    $('form').on('input', '.skill-input', function(e){
        $('#'+$(this).data('skill')+'-label').text($(this).val());
        console.log($(this).data('skill'));
    });
});