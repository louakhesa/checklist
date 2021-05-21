
var states = ["completed","progress","todo"];
var elements = {
    [states[0]]: completed,
    [states[1]]: progress,
    [states[2]]: todo,
};

/* <a href="#" target="_blank">
    <div class="checklist-item">
        <span class="checklist-item-name">Dummy title</span>
        <span class="checklist-item-platform">Dummy platform</span>
    </div>
</a> */

$(document).ready(function() {

    $('.checklist-toggle').click(function() {
        if (!$(this).hasClass('active')) {
            $('.checklist-toggle.active').removeClass('active');
        }
        $(this).toggleClass('active');
    });

    states.forEach(state => {
        var count = 0;

        elements[state].forEach(element => {
            var prefix = suffix = '';
            count++;

            if (element.url) {
                prefix = '<a href="'+ element.url +'" target="_blank">';
                suffix = '</a>';
            }

            var checklistElement = prefix +
                '<div class="checklist-item"><span class="checklist-item-name">' + 
                element.title + 
                '</span><span class="checklist-item-platform">' +
                element.platform +
                '</span></div>' +
                suffix;

            state === states[0] ? $('#' + state +' .checklist-listing').prepend(checklistElement) : $('#' + state +' .checklist-listing').append(checklistElement); 
        });

        $('#' + state +' .checklist-count').html(count);
    });
});