$().ready(function() {
    var url ="http://localhost:8080/Vendors/List"
    $.getJSON(url)
    .then(function(data) {
        console.log(data)
        render(data);
    });
});
function render(data) {
    var tbody = $("#tb")
    for(var vendor of data) {
        var row = "<tr>"
        row += "<td>"+vendor.id+"</td>"
        row += "<td>"+vendor.code+"</td>"
        row += "<td>"+vendor.name+"</td>"
        row += "<td>"+vendor.address +", "+vendor.city +", " +vendor.state +" " +vendor.zip+"</td>"
        row += "<td>"+vendor.phoneNumber+"</td>"
        row += "<td>"+vendor.email+"</td>"
        row += "</tr>"
        tbody.append(row);
    }
}