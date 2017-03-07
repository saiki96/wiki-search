    var url, searchbox;
    $(document).ready(function(data) {
        $('#search').click(function() {
            searchbox = $("#searchbox").val();
            url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchbox + "&format=json&origin=*";

            $.ajax({
                type: "GET",
                url: url,
                datatype: "json",
                success: function(data) {
                    console.log(url);
                    $("#output").html('');
                    for (var i = 0; i < data[1].length; i++) {
                    	var resultItem = "<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>"
                        $("#output").prepend(resultItem);
                 
                    }
                
            $(searchbox).val('');
                }
                /*error: function(errorMessage) {
                     alert("error!!!");
                 }*/
            });
        });
    });
