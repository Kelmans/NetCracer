//
// $(function () {
//     $('.modifiedCheckbox').click(decor);
//     $("#box").click(box);
//
//
//
//         function decor() {
//             var checkbox = $(this).find('input[type=checkbox]');
//             // если чекбокс был активен
//             if (checkbox.prop("checked")) {
//                 // снимаем класс с родительского дива
//                 $(this).removeClass("check_active");
//                 // и снимаем галочку с чекбокса
//                 checkbox.prop("checked", false);
//                 // если чекбокс не был активен
//             } else {
//                 // добавляем класс родительскому диву
//                 $(this).addClass("check_active");
//                 // ставим галочку в чекбоксе
//                 checkbox.prop("checked", true);
//             }
//         }
//     function box() {
//             var checkboxs = $(this).find('input[type=checkbox]');
//             if (checkboxs.prop("checked")) { //включен
//                 $('.modifiedCheckbox input:checkbox').prop('checked', true);
//                 $('.modifiedCheckbox').not(this).addClass("check_active");
//             } else { //выключен
//                 $('.modifiedCheckbox input:checkbox').prop('checked', false);
//                 $('.modifiedCheckbox').not(this).removeClass("check_active");
//             }
//
//         }
//     });
