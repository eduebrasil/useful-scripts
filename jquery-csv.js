var csv = '';
$('table.dx-datagrid-table.dx-datagrid-table-fixed > tbody > tr').each(function () {
    var $tds = $(this).find('td');
    var row = '';
    if ($tds.length > 0) {
        // Name: first column, span.cell-text
        var name = $tds.eq(0).find('span.cell-text').text().trim();
        // Fifth column: span.hour_badge
        var cellText5 = $tds.eq(4).find('span.hour_badge').text().trim();
        var splitTime = cellText5.split(':');
        var hoursDecimal = Math.abs(parseInt(splitTime[0])) + parseInt(splitTime[1]) / 60;
        // Keep sign if needed
        if (cellText5.includes('-')) {
            hoursDecimal = -hoursDecimal;
        }
        // Round to two decimal places
        hoursDecimal = Math.round(hoursDecimal * 100) / 100;
        row = '"' + name + '",' + hoursDecimal + '\n';
        csv += row;
    }
});

// To download the csv file
var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
hiddenElement.target = '_blank';
hiddenElement.download = 'tableData.csv';
hiddenElement.click();
