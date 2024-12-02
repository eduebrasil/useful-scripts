var csv = '';
$('table[role="grid"] tbody tr').each(function() {
    var $tds = $(this).find('td');
    var row = '';
    if($tds.length > 0){
        var cellText2 = $tds.eq(1).find('a').text(); //eq(1) selects the second column and find('a') selects the anchor tag

        var cellText6 = $tds.eq(5).find('span').text(); //eq(5) selects the sixth column and find('span') selects the span tag
        var splitTime = cellText6.split(':');
        var hoursDecimal = Math.abs(parseInt(splitTime[0])) + parseInt(splitTime[1])/60;
        // Keep sign if needed
        if(cellText6.includes('-')) {
            hoursDecimal = -hoursDecimal;
        }
        // Round to two decimal places
        hoursDecimal = Math.round(hoursDecimal * 100) / 100;
        row = '"' + cellText2 + '",' + hoursDecimal + '\n';
        csv += row;
    }
});

// Log CSV content
console.log(csv);

// To download the csv file
var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
hiddenElement.target = '_blank';
hiddenElement.download = 'tableData.csv';
hiddenElement.click();
