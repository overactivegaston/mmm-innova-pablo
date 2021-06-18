

$("#btnSubmitForm").click(() =>{
    // Sending and receiving data in JSON format using POST method
    //
    var xhr = new XMLHttpRequest();
    var url = "https://mmm-innova-pablo-logicapp.azurewebsites.net:443/api/mmm-innova-logicApp/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f48mRWL72wppdN60Pk070iqaQtexvkf-OfaO3MGx84w";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"name":$("#name").val(),"email": $("#email").val(), "subject": $("#subject").val(),"body":$("#body").val()});
    xhr.send(data);
});
