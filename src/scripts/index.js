//
// $(function () {
//     $('.decor_checkbox').click(decor);
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
//                 $('.decor_checkbox input:checkbox').prop('checked', true);
//                 $('.decor_checkbox').not(this).addClass("check_active");
//             } else { //выключен
//                 $('.decor_checkbox input:checkbox').prop('checked', false);
//                 $('.decor_checkbox').not(this).removeClass("check_active");
//             }
//
//         }
//     });
