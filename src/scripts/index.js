
$(document).ready(function() {
        var counterAdditionLineage = 0;
        var counterСlicks = 0;
        var constSort = 1;
        var rowsOne = $('#bossTable tbody  tr').get();
        var flag_sl = 0;// Флаг нажатия для #sl
        var flag_nm = 0;// Флаг нажатия для #nm
        var flag_km = 0;//Флаг нажатия для #km
        var flag_lm = 0;//Флаг нажатия для #lm
        // при клике по диву, делаем проверку
        $(document).on('click', '.table__modified-checkbox', function () {
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
            var manyCheckboxs = $(this).find('input[type=checkbox]');
            if (manyCheckboxs.prop("checked")) { //включен
                $('.table__modified-checkbox input:checkbox').prop('checked', true);
                $('.table__modified-checkbox').not(this).addClass("check_active");

            } else { //выключен
                $('.table__modified-checkbox input:checkbox').prop('checked', false);
                $('.table__modified-checkbox').not(this).removeClass("check_active");

            }
        });
        $(document).on('click', '.table__modified-checkbox', function () {
            var inps = document.getElementsByTagName('tr');
            var count = $('.inp[type=checkbox]:checked').length;
            if (count == inps.length - 1) {
                $('#box').addClass("check_active");
            } else {
                $('#box').removeClass("check_active");
            }
        });
        $('#additionLineage').click(function () {
            if (counterAdditionLineage == 0) {
                $('#bossTable')
                    .append($('<tr class="remove_class">')
                        .append($('<td>').append($('<div class="table__modified-checkbox der">').append($('<span>').append($('<input type="checkbox" class="inp" >')))))
                        .append($('<td>').append($('<div class="table__name-line modifiedFont">').append($('<div class="text_Line">').append('<input type=text  id="table__name-line"class="inpt inpt1">'), $('<div class="fasten">'))))
                        .append($('<td>').append($('<div class="statusLine modifiedFont">').append($('<div>').append('<input type=text id="statusLine"class="inpt inpt2">'))))
                        .append($('<td>').append($('<div class="autLine modifiedFont">').append($('<div>').append('<input type=text id="autLine"  class="inpt inpt3">'))))
                        .append($('<td>').append($('<div class="loginLine modifiedFont">').append($('<div>').append('<input type=text id="loginLine" class="inpt inpt4">'))))
                        .append($('<td>').append($('<div class="container_img">').append($('<div id="qwe" class="container_img-item2">'))))
                    )
                $('.table__modified-checkbox input:checkbox').prop('checked', false);
                $('.table__modified-checkbox').not(this).removeClass("check_active");
                $('div.table__name-line').addClass('table__name-line');
                $.each(rowsOne, function (index, row) {
                    $('#bossTable').children('tbody').append(row);
                });
                $('.table__container-arrow').removeClass('containerArrowSortDec');
                $('.table__container-arrow').removeClass('containerArrowSortInc');
                counterAdditionLineage++;
            } else {
                alert("Заполните предыдущую строку и нажмите 'ОК' ");
            }

        });
        $(document).on('click', '.container_img-item2', function () {// изменить имена

            if (document.getElementById("table__name-line").value === '' || document.getElementById("statusLine").value === '' || document.getElementById("autLine").value === '' || document.getElementById("loginLine").value === '') {
                alert("Заполните все поля")
            } else {
                //Добавляю html код
                //Создал переменные для хранения значений из инпутов
                //У ново добавленого штмл кода убираю дисплэй нон и добавляю его инпутам
                //Сделал для сортировки массива
                var inputNameLine = document.getElementById("table__name-line").value;
                var inputStatusLine = document.getElementById("table__name-line").value;
                var inputAutLine = document.getElementById("table__name-line").value;
                var inputLoginLine = document.getElementById("loginLine").value;
                var as = '<tr class="add_class dis"><td><div class="table__modified-checkbox der"><span> <input type="checkbox" class="inp"></span></div></td><td><div class="table__name-line"><div  class="text_Line">' + inputNameLine + '</div> <div class="fasten"></div></div></td> <td><div class="statusLine">' + inputStatusLine + '</div></td> <td><div class="autLine">' + inputAutLine + '</div></td> <td><div class="loginLine">' + inputLoginLine + '</div></td> <td><div class="container_img"><div class="container_img-item"></div></div></td> </tr>'
                $('#bossTable').append(as);
                $(this).addClass("container_img-item");
                $('input[type=text]').prop('disabled', true);
                $('input[type=text]').addClass('scr');
                $(this).removeClass("container_img-item2");
                $('.add_class').removeClass('dis');
                $('.remove_class').addClass('dis');
                counterAdditionLineage--;
            }

        });

        $('.buttonDeletion').click(function () {
            var flagSearch = true;
            $('tbody input:checkbox:checked').each(function () {

                if (counterAdditionLineage == 0) {
                    $(this).parents('tr').addClass('sr')
                } //else if( strok == 0 ){
                // $(this).parents('tr').removeClass('sr')
                //   }
                else {
                    flagSearch = false
                }

            })
            if (flagSearch == false) {
                alert('Закончите с редактированием новой строки');
            }
        });
        $('.table__container-arrow').click(function (event) {

            var element_click = event.target.className; // Тут имя класса по которому тыкнули
            var parent_click_element = $('.table__container-arrow').closest(".modifiedFont");
            var rods = event.target.closest('.modifiedFont');
            var nameClass = '.' + rods.className;
            var rod = event.target.closest('th').id;// тут ID тега TH
            var id_element;

            if (element_click == 'table__container-arrow' || element_click == 'table__container-arrow containerArrowSortDec' || element_click == 'table__container-arrow containerArrowSortDec containerArrowSortInc') {
                $('#bossTable td').removeClass('fontWe');
                if (rod == 'sl') {
                    var n = 1;
                    flag_sl++;
                } else if (rod == 'nm') {
                    var n = 2;
                    flag_nm++;
                } else if (rod == 'km') {
                    var n = 3
                    flag_km++;
                } else {
                    var n = 4
                    flag_lm++;
                }
                if (element_click == 'table__container-arrow') {
                    counterСlicks = 0;
                } else if (element_click == 'table__container-arrow containerArrowSortDec') {
                    counterСlicks = 1;
                } else {
                    counterСlicks = 2;
                }

                if (counterСlicks == 0) {
                    $('.table__container-arrow').removeClass('containerArrowSortDec');
                    $('.table__container-arrow').removeClass('containerArrowSortInc');
                    constSort *= -1;
                    $(event.target).addClass('containerArrowSortDec');
                    sortTable(constSort, n);
                } else if (counterСlicks == 1) {
                    $('.table__container-arrow').removeClass('containerArrowSortInc');
                    $(event.target).addClass('containerArrowSortInc');
                    constSort *= -1;
                    sortTable(constSort, n);
                } else {
                    $.each(rowsOne, function (index, row) {
                        $('#bossTable').children('tbody').append(row);
                    });
                    $(event.target).removeClass('containerArrowSortDec');
                    $(event.target).removeClass('containerArrowSortInc');
                }
            }

            function sortTable(f, n) {
                var rows = $('#bossTable tbody  tr').get();
                ``
                rows.sort(function (a, b) {
                    $('.table__container-arrow').parents('.modifiedFont').addClass('fontWe');
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
                    var v = $(elm).children('td').eq(n).text().toUpperCase();
                    var element_fontWe = $(elm).children('td').eq(n);
                    $(element_fontWe).addClass('fontWe')
                    if ($.isNumeric(v)) {
                        v = parseInt(v, 10);
                    }
                    return v;
                }

                $.each(rows, function (index, row) {
                    $('#bossTable').children('tbody').append(row);
                });
            };
        });
    });
