
$(document).ready(function() {
        var counterAdditionLineage = 0;
        var counterСlicks = 0;
        var constSort = 1;
        var rowsOne = $('#onlyTable tbody  tr').get();
        var flag_sl = 0;// Флаг нажатия для #sl
        var flag_nm = 0;// Флаг нажатия для #nm
        var flag_km = 0;//Флаг нажатия для #km
        var flag_lm = 0;//Флаг нажатия для #lm
        // при клике по диву, делаем проверку
        $(document).on('click', '.table__checkbox-wrapper', function () {
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
        });

        $(document).on('click', '#box', function () { //Активация всех чекбоксов
            var testActiveCheckbox = $(this).find('input[type=checkbox]');
            if (testActiveCheckbox.prop("checked")) { //включен
                $('.table__checkbox-wrapper input:checkbox').prop('checked', true);
                $('.table__checkbox-wrapper').not(this).addClass("check_active");

            } else { //выключен
                $('.table__checkbox-wrapper input:checkbox').prop('checked', false);
                $('.table__checkbox-wrapper').not(this).removeClass("check_active");

            }
        });
        $(document).on('click', '.table__checkbox-wrapper', function () {
            var variableRow = document.getElementsByTagName('tr');
            var countActiveCheckbox = $('.table__input-checkbox[type=checkbox]:checked').length;
            if (countActiveCheckbox == variableRow.length - 1) {
                $('#box').addClass("check_active");
            } else {
                $('#box').removeClass("check_active");
            }
        });
        $('#addition-row').click(function () {
            if (counterAdditionLineage == 0) {
                $('#onlyTable')
                    .append($('<tr class="remove_class">')
                        .append($('<td class="table-body__cell">').append($('<div class="table__checkbox-wrapper der">').append($('<span>').append($('<input type="checkbox" class="table__input-checkbox" >')))))
                        .append($('<td class="table-body__cell">').append($('<div class="table-body__text-cell font-color">').append($('<div class="text_Line">').append('<input type=text  id="table-body__name-line"class="search-input search-input__one-cell " >'), $('<div class="table-body__visible-pin">'))))
                        .append($('<td class="table-body__cell">').append($('<div class="table-body__text-cell ">').append($('<div>').append('<input type=text id="table-body__status-line"class="search-input search-input__two-cell ">'))))
                        .append($('<td class="table-body__cell">').append($('<div class="table-body__text-cell ">').append($('<div>').append('<input type=text id="table-body__aut-line"  class="search-input search-input__three-cell ">'))))
                        .append($('<td class="table-body__cell">').append($('<div class="table-body__text-cell ">').append($('<div>').append('<input type=text id="table-body__login-line" class="search-input search-input__four-cell ">'))))
                        .append($('<td class="table-body__cell">').append($('<div class="table-body__img-wrapper">').append($('<div id="qwe" class="table-body__img-wrapper-item2">'))))
                    )
                $('.table__checkbox-wrapper input:checkbox').prop('checked', false);
                $('.table__checkbox-wrapper').not(this).removeClass("check_active");
                $('div.table-body__name-line').addClass('table-body__name-line');
                $.each(rowsOne, function (index, row) {
                    $('#onlyTable').children('tbody').append(row);
                });
                $('.table-head__arrow-icon').removeClass('containerArrowSortDec');
                $('.table-head__arrow-icon').removeClass('containerArrowSortInc');
                counterAdditionLineage++;
            } else {
                alert("Заполните предыдущую строку и нажмите 'ОК' ");
            }

        });
        $(document).on('click', '.table-body__img-wrapper-item2', function () {// изменить имена

            if (document.getElementById("table-body__name-line").value === '' || document.getElementById("table-body__status-line").value === '' || document.getElementById("table-body__aut-line").value === '' || document.getElementById("table-body__login-line").value === '') {
                alert("Заполните все поля")
            } else {
                //Добавляю html код
                //Создал переменные для хранения значений из инпутов
                //У ново добавленого штмл кода убираю дисплэй нон и добавляю его инпутам
                //Сделал для сортировки массива
                var inputNameLine = document.getElementById("table-body__name-line").value;
                var inputStatusLine = document.getElementById("table-body__name-line").value;
                var inputAutLine = document.getElementById("table-body__name-line").value;
                var inputLoginLine = document.getElementById("table-body__login-line").value;
                var insertHTML = '<tr class="add_class dis"><td class="table-body__cell"><div class="table__checkbox-wrapper der"><span> <input type="checkbox" class="inp"></span></div></td><td class="table-body__cell"><div class="table-body__text-cell font-color"><div>' + inputNameLine + '</div> <div class="table-body__visible-pin"></div></div></td> <td class="table-body__cell"><div class="table-body__text-cell">' + inputStatusLine + '</div></td> <td class="table-body__cell"><div class="table-body__text-cell">' + inputAutLine + '</div></td > <td class="table-body__cell"><div class="table-body__text-cell">' + inputLoginLine + '</div></td>  <td  class="table-body__cell"><div class="table-body__img-wrapper"><div class="table-body__img-wrapper_item"></div></div></td> </tr>'
                $('#onlyTable').append(insertHTML);
                $(this).addClass("table-body__img-wrapper_item");
                $('input[type=text]').prop('disabled', true);
                $('input[type=text]').addClass('scr');
                $(this).removeClass("table-body__img-wrapper-item2");
                $('.add_class').removeClass('dis');
                $('.remove_class').addClass('dis');
                counterAdditionLineage--;
            }

        });

        $('#remove-row').click(function () {
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
        });
        $('.table-head__arrow-icon').click(function (event) {

            var element_click = event.target.className; // Тут имя класса по которому тыкнули
            var parent_click_element = $('.table-head__arrow-icon').closest(".table-head__text-cell");
            var objectSearchClass = event.target.closest('.table-head__text-cell');
            var nameSearchClass = '.' + objectSearchClass.className;
            var repositoryIdTH = event.target.closest('th').id;// тут ID тега TH
            var id_element;

            if (element_click == 'table-head__arrow-icon' || element_click == 'table-head__arrow-icon containerArrowSortDec' || element_click == 'table-head__arrow-icon containerArrowSortDec containerArrowSortInc') {
                $('#onlyTable td').removeClass('font-weight_bold');
                if (repositoryIdTH == 'first-column') {
                    var numberColumn = 1;
                    flag_sl++;
                } else if (repositoryIdTH == 'two-column') {
                    var numberColumn = 2;
                    flag_nm++;
                } else if (repositoryIdTH == 'three-column') {
                    var numberColumn = 3
                    flag_km++;
                } else {
                    var numberColumn = 4
                    flag_lm++;
                }

                if (element_click == 'table-head__arrow-icon') {
                    counterСlicks = 0;
                } else if (element_click == 'table-head__arrow-icon containerArrowSortDec') {
                    counterСlicks = 1;
                } else {
                    counterСlicks = 2;
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
                        $('#onlyTable').children('tbody').append(row);
                    });
                    $(event.target).removeClass('containerArrowSortDec');
                    $(event.target).removeClass('containerArrowSortInc');
                }
            }

            function sortTable(f, n) {
                var allRows = $('#onlyTable tbody  tr').get();
                allRows.sort(function (a, b) {
                    $('.table-head__arrow-icon').parents('.table-body__text-cell').addClass('font-weight_bold');
                    var A = getVal(a);
                    var B = getVal(b);

                    if (A < B) {
                        return -1 * f;
                    }
                    if (A > B) {
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
                    $('#onlyTable').children('tbody').append(row);
                });
            };
        });
    });
