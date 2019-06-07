$(document).ready(function () {
    var counterIncompleteRow = 0;
    var orderSort = 0;
    var constSort = 1;
    var originalRows = $('.table-body__row').get();


    $(document).on('click', '.table__checkbox-wrapper', checkCheckboxStatus);
    $(document).on('click', '#mainCheckbox', changeAllCheckboxsState);
    $(document).on('click', '.table-body__OK-icon', checkingEmptyInput);
    $(document).on('click', '.table__checkbox-wrapper', changeMainCheckboxState);
    $('#additionRow').click(addRow);
    $('#removeRow').click(removeRow);
    $('.table-head__arrow-icon').click(sortColumnText);

    function checkCheckboxStatus() {
        var checkbox = $(this).find('.checkbox');
        // если чекбокс был активен
        if (checkbox.prop("checked")) {
            // снимаем класс с родительского дива
            $(this).removeClass("_active");

            // и снимаем галочку с чекбокса
            checkbox.prop("checked", false);
            // если чекбокс не был активен
        } else {
            // добавляем класс родительскому диву
            $(this).addClass("_active");

            // ставим галочку в чекбоксе
            checkbox.prop("checked", true);
        }
    }

    function changeAllCheckboxsState() {
        var testActiveCheckbox = $('#mainCheckbox').find('.checkbox');
        if (testActiveCheckbox.prop("checked")) { //включен
            $('.checkbox').prop('checked', true);
            $('.table__checkbox-wrapper').not('#mainCheckbox').addClass("_active");

        } else { //выключен
            $('.checkbox').prop('checked', false);
            $('.table__checkbox-wrapper').not('#mainCheckbox').removeClass("_active");
        }
    }

    function changeMainCheckboxState() {
        var getNumberRow = document.getElementsByTagName('tr');
        var countActivateCheckbox = $('.table-body .checkbox:checked').length;
        if ( countActivateCheckbox == getNumberRow.length - 1  ) {
            $('#mainCheckbox').addClass("_active");
        }  else {
            $('#mainCheckbox').removeClass("_active");
        }
    }

    function addRow() {
        if (counterIncompleteRow == 0) {
            $('#table')
                .append($('<tr class="new-row">' +
                    '<td class="table-body__cell"><div class="table__checkbox-wrapper "><span> <input type="checkbox" class="checkbox"></span></div></td>' +
                    '<td class="table-body__cell"><div class="table-body__cell-text color_blue"><div ><input type=text id="table-body__name-column" class="search-input search-input__name-cell"></div></div></td> ' +
                    '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__status-column" class="search-input search-input__status-cell"></div></td> ' +
                    '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__auth-column" class="search-input search-input__auth-cell"></div></td > ' +
                    '<td class="table-body__cell"><div class="table-body__cell-text"><input type=text id="table-body__login-column" class="search-input search-input__login-cell"></div></td> ' +
                    '<td  class="table-body__cell"><div class="table-body__plus-icon-wrapper"><div class="table-body__OK-icon"></div></div></td></tr>'));
            // $('.checkbox').prop('checked', false);
            $('.table__checkbox-wrapper').not(this).removeClass("_active");
            $.each(originalRows, function (SearchIndexColumn, row) {
                $('tbody').append(row);
            });
            $('.table-head__arrow-icon').removeClass('container-arrow-sort-dec').removeClass('container-arrow-sort-inc');
            counterIncompleteRow++;
        } else {
            alert("Заполните предыдущую строку и нажмите 'ОК' ");
        }
    };

    //$('.table-body__OK-icon').click(function () {
    function checkingEmptyInput(event) {

        if (document.getElementById("table-body__name-column").value === '' || document.getElementById("table-body__status-column").value === '' || document.getElementById("table-body__auth-column").value === '' || document.getElementById("table-body__login-column").value === '') {
            alert("Заполните все поля");
        } else {
            //Добавляю html код
            //Создал переменные для хранения значений из инпутов
            //У ново добавленого штмл кода убираю дисплэй нон и добавляю его инпутам
            //Сделал для сортировки массива
            var inputNameLine = document.getElementById("table-body__name-column").value;
            var inputStatusLine = document.getElementById("table-body__status-column").value;
            var inputAutLine = document.getElementById("table-body__auth-column").value;
            var inputLoginLine = document.getElementById("table-body__login-column").value;
            var insertHTML = '<tr class="table-body__row"><td class="table-body__cell"><div class="table__checkbox-wrapper "><span> <input type="checkbox" class="checkbox"></span></div></td><td class="table-body__cell"><div class="table-body__cell-text color_blue"><div>' + inputNameLine + '</div> <div class="table-body__pin-icon"></div></div></td> <td class="table-body__cell"><div class="table-body__cell-text">' + inputStatusLine + '</div></td> <td class="table-body__cell"><div class="table-body__cell-text">' + inputAutLine + '</div></td > <td class="table-body__cell"><div class="table-body__cell-text">' + inputLoginLine + '</div></td>  <td  class="table-body__cell"><div class="table-body__plus-icon-wrapper"><div class="table-body__plus-icon"></div></div></td> </tr>';
            $('#table').append(insertHTML);
            $(event.target).addClass("table-body__plus-icon");
            $('.search-input').prop('disabled', true);
            $('.search-input').addClass('active-checkbox');
            $(event.target).removeClass("table-body__OK-icon");
            $('.new-row').remove();
            counterIncompleteRow--;
        }

    }

    function removeRow() {
        var flagSearch = true;
        $('.table-body .checkbox:checked').each(function () {

            if (counterIncompleteRow == 0) {
                $(this).parents('tr').addClass('display_none');
            } else {
                flagSearch = false;
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
        var SearchIndexColumn = parseInt($(this).parents('th').index());
        //  var indexes = $('th').map(function(){return $(this).index()});

        if (nameElementClick == 'table-head__arrow-icon' || nameElementClick == 'table-head__arrow-icon container-arrow-sort-dec' || nameElementClick == 'table-head__arrow-icon container-arrow-sort-dec container-arrow-sort-inc') {
            $('#table td').removeClass('font-weight_bold');
            var numberColumn = 0;
            switch (SearchIndexColumn) {
                case 1:
                     numberColumn = 1;

                    break;
                case 2:
                     numberColumn = 2;

                    break;
                case 3:
                     numberColumn = 3;

                    break;
                default:
                     numberColumn = 4;

            }

            switch (nameElementClick) {
                case 'table-head__arrow-icon':
                    orderSort = 0;
                    break;
                case 'table-head__arrow-icon container-arrow-sort-dec':
                    orderSort = 1;
                    break;
                default:
                    orderSort = 2;
            }

            if (orderSort == 0) {
                $('.table-head__arrow-icon').removeClass('container-arrow-sort-dec');
                $('.table-head__arrow-icon').removeClass('container-arrow-sort-inc');
                constSort *= -1;
                $(event.target).addClass('container-arrow-sort-dec');
                sortTable(constSort, numberColumn);
            } else if (orderSort == 1) {
                $('.table-head__arrow-icon').removeClass('container-arrow-sort-inc');
                $(event.target).addClass('container-arrow-sort-inc');
                constSort *= -1;
                sortTable(constSort, numberColumn);
            } else {
                $.each(originalRows, function (indexColumn, AllRow) {
                    $('#table').children('tbody').append(AllRow);
                });
                $(event.target).removeClass('container-arrow-sort-dec');
                $(event.target).removeClass('container-arrow-sort-inc');
            }
        }

        function sortTable(f, n) {
            var allRows = $('.table-body__row').get();
            allRows.sort(function (a, b) {

                var A = getElementText(a);
                var B = getElementText(b);

                if (A < B) {
                    return -1 * f;
                } else if (A > B) {
                    return 1 * f;
                }
                return 0;
            });

            function getElementText(elm) {
                var elementTextUpperCase = $(elm).children('td').eq(n).text().toUpperCase();
                var elementText = $(elm).children('td').eq(n);
                $(elementText).addClass('font-weight_bold');
                if ($.isNumeric(elementTextUpperCase)) {
                    elementTextUpperCase = parseInt(elementTextUpperCase, 10);
                }
                return elementTextUpperCase;
            }

            $.each(allRows, function (index, row) {
                $('#table').children('tbody').append(row);
            });
        }
    }
});
