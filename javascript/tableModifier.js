/**
 * Created by idnrsj on 9/22/2016.
 */
$('#myTable').on('click', 'input[type="button"]', function () {
    $(this).closest('tr').remove();
})
$('#insert').click(function () {
    $('#myTable').append('<tr><td><input type="text" class="fname" /></td><td><input type="button" value="Delete" /></td></tr>')
});