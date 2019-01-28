
const URL = "https://web-students-1aa35.firebaseio.com/group-01.json";

fetchData();

function fetchData(){
    var request = new XMLHttpRequest();
    request.open('GET', URL, true); //method, URL, async (operates asynchronously)
    request.onload = function() { //
        const OK = 200;
        if (request.status !== OK) {
            document.writeln('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
            return;
        }
        var remoteStudents = JSON.parse(request.responseText);

        remoteStudents.forEach(element => {
        students.push(element);
        });
        refreshTable();
        loadData();
        //loadDataGrid();
    }; // end of function()
    request.send();

} 