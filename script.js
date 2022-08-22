const resource = 'data.json';
let response ;
const getData = async () => {
    const response = await fetch(resource)
    const data = await response.json();
    return data;
}

getData().then(data => {
     response = data;
    // table body
    const tableBody = document.getElementById("tableData")
    response.forEach(element => {
        let tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow);


        for (const el in element) {
            let tableData = document.createElement('td')
            tableRow.appendChild(tableData);
            if (el == 'type') {
                let badge = document.createElement('span');
                tableData.appendChild(badge);
                badge.classList.add('badge');
                const textNode = document.createTextNode(element[el]);
                badge.appendChild(textNode);
            }
            else {
                const textNode = document.createTextNode(element[el]);
                tableData.appendChild(textNode);
            }

        }
    });
})


function filterUser() {


    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tableData = document.getElementById("tableData");
    tr = tableData.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        a = tr[i].getElementsByTagName("td")[0];
        txtValue = a.textContent || a.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }

}