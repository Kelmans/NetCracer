
$(document).ready(function() {
        var counterAdditionLineage = 0;
        var counterСlicks = 0;
        var constSort = 1;
        var rowsOne = $('#table tbody  tr').get();
        var flag_sl = 0;// Флаг нажатия для #sl
        var flag_nm = 0;// Флаг нажатия для #nm
        var flag_km = 0;//Флаг нажатия для #km
        var flag_lm = 0;//Флаг нажатия для #lm

    $(document).on('click', '.table__checkbox-wrapper', testActiveCheckbox);
    $(document).on('click', '#mainCheckbox', activeChecbox);
    $(document).on('click', '.table__checkbox-wrapper', countActiveCheckbox);
    $('#additionRow').click(innerHTML);
    $('#removeRow').click(removeRow);
    $(document).on('click', '.table-body__img-wrapper_item2',checkEmptyInput);
    $('.table-head__arrow-icon').click(sortCollumnText);


       function testActiveCheckbox() {
            var checkbox = $(this).find('input[type=checkbox]');
            // если чекбокс был активен
            if (checkbox.prop("checked")) {
                // снимаем класс с родительского дива
                $(this).removeClass("check_active");

                // и снимаем галочку с чекбокса
                checkbox.prop("checked", false);
                // если чекбокс не был активен
            } else {
                // добавляем класс родительскому диву
                $(this).addClass("check_active");

                // ставим галочку в чекбоксе
                checkbox.prop("checked", true);
            }
        };

       function activeChecbox () { //Активация всех чекбоксов
            var testActiveCheckbox = $('#mainCheckbox').find('input[type=checkbox]');
            if (testActiveCheckbox.prop("checked")) { //включен
                $('.table__checkbox-wrapper input:checkbox').prop('checked', true);
                $('.table__checkbox-wrapper').not('#mainCheckbox').addClass("check_active");

            } else { //выключен
                $('.table__checkbox-wrapper input:checkbox').prop('checked', false);
                $('.table__checkbox-wrapper').not('#mainCheckbox').removeClass("check_active");

            }
        };
        function countActiveCheckbox() {
            var variableRow = document.getElementsByTagName('tr');
            var countActiveCheckbox = $('.checkbox[type=checkbox]:checked').length;
            if (countActiveCheckbox == variableRow.length - 1) {
                $('#mainCheckbox').addClass("check_active");
            } else {
                $('#mainCheckbox').removeClass("check_active");
            }
        };
        function innerHTML() {
            if (counterAdditionLineage == 0) {
                $('#table')
                    .append($('<tr class="remove_class">' +
                        '<td class="table-body__cell"><div class="table__checkbox-wrapper "><span> <input type="checkbox" class="checkbox"></span></div></td>' +
                        '<td class="table-body__cell"><div class="table-body__cell-text color_blue"><div ><input type=text id="table-body__name-line" class="search-input search-input__one-cell"></div></div></td> ' +
                        '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__status-line" class="search-input search-input__two-cell"></div></td> ' +
                        '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__aut-line" class="search-input search-input__three-cell"></div></td > ' +
                        '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__login-line" class="search-input search-input__four-cell"></div></td> ' +
                        '<td  class="table-body__cell"><div class="table-body__img-wrapper"><div class="table-body__img-wrapper_item2"></div></div></td></tr>'));

                    // ) $('#table')
                    // .append($('<tr class="remove_class">')
                    //     .append($('<td class="table-body__cell">').append($('<div class="table__checkbox-wrapper ">').append($('<span>').append($('<input type="checkbox" class="table__input-checkbox" >')))))
                    //     .append($('<td class="table-body__cell">').append($('<div class="table-body__cell-text color_blue">').append($('<div class="text_Line">').append('<input type=text  id="table-body__name-line"class="search-input search-input__one-cell " >'), $('<div class="table-body__pin-icon">'))))
                    //     .append($('<td class="table-body__cell">').append($('<div class="table-body__cell-text ">').append($('<div>').append('<input type=text id="table-body__status-line"class="search-input search-input__two-cell ">'))))
                    //     .append($('<td class="table-body__cell">').append($('<div class="table-body__cell-text ">').append($('<div>').append('<input type=text id="table-body__aut-line"  class="search-input search-input__three-cell ">'))))
                    //     .append($('<td class="table-body__cell">').append($('<div class="table-body__cell-text ">').append($('<div>').append('<input type=text id="table-body__login-line" class="search-input search-input__four-cell ">'))))
                    //     .append($('<td class="table-body__cell">').append($('<div class="table-body__img-wrapper">').append($('<div  class="table-body__img-wrapper_item2">'))))
                    // )
                $('.table__checkbox-wrapper input:checkbox').prop('checked', false);
                $('.table__checkbox-wrapper').not(this).removeClass("check_active");
                $('div.table-body__name-line').addClass('table-body__name-line');
                $.each(rowsOne, function (index, row) {
                    $('#table').children('tbody').append(row);
                });
                $('.table-head__arrow-icon').removeClass('containerArrowSortDec').removeClass('containerArrowSortInc');
                counterAdditionLineage++;
            } else {
                alert("Заполните предыдущую строку и нажмите 'ОК' ");
            }

        };
    //$('.table-body__img-wrapper_item2').click(function () {
     function checkEmptyInput(event) {

            if (document.getElementById("table-body__name-line").value === '' || document.getElementById("table-body__status-line").value === '' || document.getElementById("table-body__aut-line").value === '' || document.getElementById("table-body__login-line").value === '') {
                alert("Заполните все поля")
            } else {
                //Добавляю html код
                //Создал переменные для хранения значений из инпутов
                //У ново добавленого штмл кода убираю дисплэй нон и добавляю его инпутам
                //Сделал для сортировки массива
                var inputNameLine = document.getElementById("table-body__name-line").value;
                var inputStatusLine = document.getElementById("table-body__status-line").value;
                var inputAutLine = document.getElementById("table-body__aut-line").value;
                var inputLoginLine = document.getElementById("table-body__login-line").value;
                var insertHTML = '<tr class="add_class"><td class="table-body__cell"><div class="table__checkbox-wrapper "><span> <input type="checkbox" class="checkbox"></span></div></td><td class="table-body__cell"><div class="table-body__cell-text color_blue"><div>' + inputNameLine + '</div> <div class="table-body__pin-icon"></div></div></td> <td class="table-body__cell"><div class="table-body__cell-text">' + inputStatusLine + '</div></td> <td class="table-body__cell"><div class="table-body__cell-text">' + inputAutLine + '</div></td > <td class="table-body__cell"><div class="table-body__cell-text">' + inputLoginLine + '</div></td>  <td  class="table-body__cell"><div class="table-body__img-wrapper"><div class="table-body__img-wrapper_item"></div></div></td> </tr>'
                $('#table').append(insertHTML);
                $(event.target).addClass("table-body__img-wrapper_item");
                $('input[type=text]').prop('disabled', true);
                $('input[type=text]').addClass('activeCheckbox');
                $(event.target).removeClass("table-body__img-wrapper_item2");

                $('.remove_class').remove();
                counterAdditionLineage--;
            }

        };

        function removeRow () {
            var flagSearch = true;
            $('tbody input:checkbox:checked').each(function () {

                if (counterAdditionLineage == 0) {
                    $(this).parents('tr').addClass('sr')
                }
                else {
                    flagSearch = false
                }

            })
            if (flagSearch == false) {
                alert('Закончите с редактированием новой строки');
            }
        };
      function sortCollumnText(event) {

            var element_click = event.target.className; // Тут имя класса по которому тыкнули
            var parent_click_element = $('.table-head__arrow-icon').closest(".table-head__cell-text");
            var objectSearchClass = event.target.closest('.table-head__cell-text');
            var nameSearchClass = '.' + objectSearchClass.className;
            var repositoryIdTH = event.target.closest('th').id;// тут ID тега TH
            var id_element;
            var index = parseInt( $(this).parents('th').index());
            var indexes = $('th').map(function(){return $(this).index()});

            if (element_click == 'table-head__arrow-icon' || element_click == 'table-head__arrow-icon containerArrowSortDec' || element_click == 'table-head__arrow-icon containerArrowSortDec containerArrowSortInc') {
                $('#table td').removeClass('font-weight_bold');
                switch (index) {
                    case 1:
                        var numberColumn = 1;
                        flag_sl++;
                        break;
                    case 2:
                        var numberColumn = 2;
                        flag_nm++;
                        break;
                    case 3:
                        var numberColumn = 3
                        flag_km++;
                        break;
                    default:
                        var index = 4
                        flag_lm++;
                }

                if (element_click == 'table-head__arrow-icon') {
                    counterСlicks = 0;
                } else if (element_click == 'table-head__arrow-icon containerArrowSortDec') {
                    counterСlicks = 1;
                } else {
                    counterСlicks = 2;
                }
                switch (element_click) {
                    case 'table-head__arrow-icon':
                        counterСlicks = 0;
                        break;
                    case 'table-head__arrow-icon containerArrowSortDec':
                        counterСlicks = 1;
                        break;
                    default:
                        var index = 4
                        flag_lm++;
                }

                if (counterСlicks == 0) {
                    $('.table-head__arrow-icon').removeClass('containerArrowSortDec');
                    $('.table-head__arrow-icon').removeClass('containerArrowSortInc');
                    constSort *= -1; //постоянная переменная работает как флаг для сортировки
                    $(event.target).addClass('containerArrowSortDec');
                    sortTable(constSort, numberColumn);
                } else if (counterСlicks == 1) {
                    $('.table-head__arrow-icon').removeClass('containerArrowSortInc');
                    $(event.target).addClass('containerArrowSortInc');
                    constSort *= -1;//постоянная переменная работает как флаг для сортировки
                    sortTable(constSort, numberColumn);
                } else {
                    $.each(rowsOne, function (index, row) {
                        $('#table').children('tbody').append(row);
                    });
                    $(event.target).removeClass('containerArrowSortDec');
                    $(event.target).removeClass('containerArrowSortInc');
                }
            }

            function sortTable(f, n) {
                var allRows = $('.table-body__row').get();
                allRows.sort(function (a, b) {
                 //   $('.table-head__arrow-icon').parents('.table-body__cell-text').addClass('font-weight_bold');
                    var A = getVal(a);
                    var B = getVal(b);

                    if (A < B) {
                        return -1 * f;
                    }
                    else if (A > B) {
                        return 1 * f;
                    }
                    return 0;
                });

                function getVal(elm) {
                    var elementText = $(elm).children('td').eq(n).text().toUpperCase();
                    var element_fontWe = $(elm).children('td').eq(n);
                    $(element_fontWe).addClass('font-weight_bold')
                    if ($.isNumeric(elementText)) {
                        elementText = parseInt(elementText, 10);
                    }
                    return elementText;
                }

                $.each(allRows, function (index, row) {
                    $('#table').children('tbody').append(row);
                });
            };
        };
    });
