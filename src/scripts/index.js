
$(document).ready(function() {
        var counterAddRow = 0;
        var orderSort = 0;
        var constSort = 1;
        var originalRows = $('.table-body__row').get();



    $(document).on('click', '.table__checkbox-wrapper', checkingStatusCheckbox);
    $(document).on('click', '#mainCheckbox', mainCheckboxState);
    $(document).on('click', '.table__checkbox-wrapper', changesMainCheckboxState);
    $('#additionRow').click(addRow);
    $('#removeRow').click(removeRow);
    $(document).on('click', '.table-body__img-wrapper_item2',checkingEmptyInput);
    $('.table-head__arrow-icon').click(sortColumnText);


       function checkingStatusCheckbox() {
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
        }

       function mainCheckboxState () {
            var testActiveCheckbox = $('#mainCheckbox').find('input[type=checkbox]');
            if (testActiveCheckbox.prop("checked")) { //включен
                $('.checkbox').prop('checked', true);
                $('.table__checkbox-wrapper').not('#mainCheckbox').addClass("check_active");

            } else { //выключен
                $('.table__checkbox-wrapper input:checkbox').prop('checked', false);
                $('.table__checkbox-wrapper').not('#mainCheckbox').removeClass("check_active");
            }
        }
        function changesMainCheckboxState() {
            var gettingNumberRow = document.getElementsByTagName('tr');
            var countActivatedCheckbox = $('.checkbox[type=checkbox]:checked').length;
            if (countActivatedCheckbox == gettingNumberRow.length - 1) {
                $('#mainCheckbox').addClass("check_active");
            } else {
                $('#mainCheckbox').removeClass("check_active");
            }
        }
        function addRow() {
            if (counterAddRow == 0) {
                $('#table')
                    .append($('<tr class="remove_class">' +
                        '<td class="table-body__cell"><div class="table__checkbox-wrapper "><span> <input type="checkbox" class="checkbox"></span></div></td>' +
                        '<td class="table-body__cell"><div class="table-body__cell-text color_blue"><div ><input type=text id="table-body__name-line" class="search-input search-input__one-cell"></div></div></td> ' +
                        '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__status-line" class="search-input search-input__two-cell"></div></td> ' +
                        '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__aut-line" class="search-input search-input__three-cell"></div></td > ' +
                        '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__login-line" class="search-input search-input__four-cell"></div></td> ' +
                        '<td  class="table-body__cell"><div class="table-body__img-wrapper"><div class="table-body__img-wrapper_item2"></div></div></td></tr>'));
                // $('.checkbox').prop('checked', false);
                $('.table__checkbox-wrapper').not(this).removeClass("check_active");
                $.each(originalRows, function (index, row) {
                    $('tbody').append(row);
                });
                $('.table-head__arrow-icon').removeClass('containerArrowSortDec').removeClass('containerArrowSortInc');
                counterAddRow++;
            } else {
                alert("Заполните предыдущую строку и нажмите 'ОК' ");
            }

        };
    //$('.table-body__img-wrapper_item2').click(function () {
     function checkingEmptyInput(event) {

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
                counterAddRow--;
            }

        }

        function removeRow () {
            var flagSearch = true;
            $('tbody input:checkbox:checked').each(function () {

                if (counterAddRow == 0) {
                    $(this).parents('tr').addClass('sr')
                }
                else {
                    flagSearch = false
                }

            })
            if (flagSearch == false) {
                alert('Закончите с редактированием новой строки');
            }
        }
      function sortColumnText(event) {

            var nameElementClick = event.target.className; // Тут имя класса по которому тыкнули
            var parentСlickElement = $('.table-head__arrow-icon').closest(".table-head__cell-text");
            var objectSearchClass = event.target.closest('.table-head__cell-text');
            var nameSearchClass = '.' + objectSearchClass.className;
            var repositoryIdTH = event.target.closest('th').id;// тут ID тега TH
            var id_element;
            var SearchIndexColumn = parseInt( $(this).parents('th').index());
          //  var indexes = $('th').map(function(){return $(this).index()});

            if (nameElementClick == 'table-head__arrow-icon' || nameElementClick == 'table-head__arrow-icon containerArrowSortDec' || nameElementClick == 'table-head__arrow-icon containerArrowSortDec containerArrowSortInc') {
                $('#table td').removeClass('font-weight_bold');
                switch (SearchIndexColumn) {
                    case 1:
                        var numberColumn = 1;

                        break;
                    case 2:
                        var numberColumn = 2;

                        break;
                    case 3:
                        var numberColumn = 3

                        break;
                    default:
                        var numberColumn = 4

                }
                
                switch (nameElementClick) {
                    case 'table-head__arrow-icon':
                        orderSort = 0;
                        break;
                    case 'table-head__arrow-icon containerArrowSortDec':
                        orderSort = 1;
                        break;
                    default:
                        orderSort = 2;
                }

                if (orderSort == 0) {
                    $('.table-head__arrow-icon').removeClass('containerArrowSortDec');
                    $('.table-head__arrow-icon').removeClass('containerArrowSortInc');
                    constSort *= -1;
                    $(event.target).addClass('containerArrowSortDec');
                    sortTable(constSort, numberColumn);
                } else if (orderSort == 1) {
                    $('.table-head__arrow-icon').removeClass('containerArrowSortInc');
                    $(event.target).addClass('containerArrowSortInc');
                    constSort *= -1;
                    sortTable(constSort, numberColumn);
                } else {
                    $.each(originalRows, function (indexColumn, AllRow) {
                        $('#table').children('tbody').append(AllRow);
                    });
                    $(event.target).removeClass('containerArrowSortDec');
                    $(event.target).removeClass('containerArrowSortInc');
                }
            }

            function sortTable(f, n) {
                var allRows = $('.table-body__row').get();
                allRows.sort(function (a, b) {

                    var A = getTextValueElement(a);
                    var B = getTextValueElement(b);

                    if (A < B) {
                        return -1 * f;
                    }
                    else if (A > B) {
                        return 1 * f;
                    }
                    return 0;
                });

                function getTextValueElement(elm) {
                    var textElement = $(elm).children('td').eq(n).text().toUpperCase();
                    var addFontWeightElement = $(elm).children('td').eq(n);
                    $(addFontWeightElement).addClass('font-weight_bold');
                    if ($.isNumeric(textElement)) {
                        textElement = parseInt(textElement, 10);
                    }
                    return textElement;
                }

                $.each(allRows, function (index, row) {
                    $('#table').children('tbody').append(row);
                });
            }
        }
    });
