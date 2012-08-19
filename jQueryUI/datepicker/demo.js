//add resource: http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css

$('#birthDate').datepicker({
        dateFormat: 'yy-mm-dd',
        yearRange: 'c-120:nn',
        changeYear: true,
        changeMonth: true,
        constrainInput: false,
        monthNamesShort: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
        dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
        dayNamesShort: ['Nie','Pn','Wt','Śr','Czw','Pt','So'],
        dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
        isRTL: false,
        showMonthAfterYear: false,
        firstDay: 1
});​
