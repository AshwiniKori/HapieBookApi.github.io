// Hapi book API's
function onSubmit() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;

    if (year.length != 4) {
        alert("Enter valid Year");
        return false;
    }

    if (month > 12 || month <= 0) {
        alert("Enter valid Month");
        return false;
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '283145f3damsh2e9270231ce8eedp1732d5jsn896f1f452466',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };
    
    fetch(`https://hapi-books.p.rapidapi.com/month/${year}/${month}`, options)
        .then(response => response.json())
        .then(json => {
            var htmlString = `
            <tr>
              <th> Position </th>
              <th> Name  </th>
              <th> Cover </th>
              <th> Rating </th>
            <tr>
            `;
            json.forEach(element => {
                htmlString += `
                <tr>
              <td> ${element.position} </td>
              <td> ${element.name} </td>
              <td> <img src = "${element.cover}" height = "200" width= "200" </td>
              <td> ${element.rating} </td>
            <tr>
            `
            });
            document.getElementById("bookTable").innerHTML = htmlString;
        })
        .catch(err => console.error(err));
}
