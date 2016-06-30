$(document).ready(function() {

    var listener = $(".listener");

    listener.on('click', function(e) {

        var code = e.target.attributes.code.nodeValue


        $.ajax({
            method: 'POST',
            url: '/switch',
            dataType: 'json',
            data: {
                code: code
            },
            success: function(res) {
                console.log(res);
            },
            error: function(err) {
                console.log(err);
            }
        });

    });

});
