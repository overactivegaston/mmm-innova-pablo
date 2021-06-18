// function handleFormSubmit(event) {
//     event.preventDefault();
    
//     const data = new FormData(event.target);
    
//     const formJSON = Object.fromEntries(data.entries());
  
//     // for multi-selects, we need special handling
//     formJSON.snacks = data.getAll('snacks');
    
//     const results = document.querySelector('.results pre');
//     results.innerText = JSON.stringify(formJSON, null, 2);
//   }
  
//   const form = document.querySelector('.contact-form');
//   form.addEventListener('submit', handleFormSubmit);

// $(document).ready(function () {
//     $("#submitform").click(function (e) {
//         var MyForm = JSON.stringify($("#myform").serializeJSON());
//         console.log(MyForm);
//         $.ajax(
//             {
//                 url: "<your url>",
//                 type: "POST",
//                 data: MyForm,
//             });
//         e.preventDefault(); //STOP default action
//     });
// });
// var form;

// form.onsubmit = function (e) {
//   // stop the regular form submission
//   e.preventDefault();

//   // collect the form data while iterating over the inputs
//   var data = {};
//   for (var i = 0, ii = form.length; i < ii; ++i) {
//     var input = form[i];
//     if (input.name) {
//       data[input.name] = input.value;
//     }
//   }

//   // construct an HTTP request
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://mmm-innova-pablo-logicapp.azurewebsites.net:443/api/mmm-innova-logicApp/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f48mRWL72wppdN60Pk070iqaQtexvkf-OfaO3MGx84w", true);
//   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

//   // send the collected data as JSON
//   xhr.send(JSON.stringify(data));

//   xhr.onloadend = function () {
//     // done
//   };
// };


$("#btnSubmitForm").click(() =>{
    // Sending and receiving data in JSON format using POST method
    //
    var xhr = new XMLHttpRequest();
    var url = "https://mmm-innova-pablo-logicapp.azurewebsites.net:443/api/mmm-innova-logicApp/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f48mRWL72wppdN60Pk070iqaQtexvkf-OfaO3MGx84w";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"name":$("#name").val(),"email": $("#email").val(), "subject": $("#subject").val(),"body":$("#body").val()});
    xhr.send(data);
});
