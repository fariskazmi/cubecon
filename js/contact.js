function send_email(){
    data = { "message": "hello", "email": "yes@yes.yes", "name": "moiname"}
    alert("Sending")
    $.ajax({
        url: "https://uafc.ca/send-cubecon-email",
        type: "POST",
        data: data,
        success: function(response){
            alert("Sent")
        }
    })
}