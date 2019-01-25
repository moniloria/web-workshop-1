
var students = [
    {id: "1122222", name: "John", score: 90 },
    {id: "2223333", name: "Larry", score: 60 },
    {id: "4455555", name: "Joseph", score: 50 },
    {id: "5526666", name: "Karla", score: 80}
];


function loadData(){
    
    let JSON_data = document.getElementById("JSON_data");
    JSON_data.innerText = JSON.stringify(students, undefined, 2);

    var names = [];
        students.forEach(student => {
        names.push(student.name);
        });

    let initalSummary = document.getElementById("initalSummary")
    var par1 = document.createElement("p");
    par1.innerText = "Students are: " +names;
    initalSummary.appendChild(par1);
    var par2 = document.createElement("p");
    par2.innerText = "Average: " + calculateAverage();
    initalSummary.appendChild(par2);
    
    loadStudents()

}

function clearAll(){
    var isToggled = false;
    var textTable = document.getElementById("textTable");
    var i = 0;
    while (i<textTable.childNodes.length) {
        let scoreColumn = textTable.childNodes[i].childNodes[2]; //here I access column 3
        if (scoreColumn.classList.contains("failed")) {
            scoreColumn.classList.remove("failed");
        }
        i ++;
    }
    document.getElementById("passingScore").value="";
}

function refreshTable(){
    let textTable = document.getElementById("textTable");
    
    while (textTable.hasChildNodes()) {
        textTable.removeChild(textTable.lastChild);
    }
    loadStudents()
}

function loadStudents() {
    var i = 0;
    let textTable = document.getElementById("textTable");

    while (i < students.length){
        // first I create the section class row
        var rowItem = document.createElement("section"); // create section
        rowItem.classList.add("row"); //class row
        textTable.appendChild(rowItem); // append the row to the container
        
        // now I create the 3 columns
        var colItem1 = document.createElement("section"); // create section
        colItem1.classList.add("col-sm"); // class col-sd
        colItem1.innerText = students[i].id; // add text to the column, the student's id
        rowItem.appendChild(colItem1); // append the column to the row

        
        var colItem2 = document.createElement("section"); // create section
        colItem2.classList.add("col-sm"); // class col-sd
        colItem2.innerText = students[i].name; // add text to the column, the student's name
        rowItem.appendChild(colItem2); // append the column to the row

        var colItem3 = document.createElement("section"); // create section
        colItem3.classList.add("col-sm"); // class col-sd

        let pass = document.getElementById("passingScore").value;
        if (students[i].score < pass) {
            colItem3.classList.add("failed");
            colItem3.innerText = students[i].score;
            rowItem.appendChild(colItem3);
        }
        else {
            colItem3.innerText = students[i].score;
            rowItem.appendChild(colItem3);
        }
        i = i + 1; 
    }
    
}

function calculateAverage(){
    var average = 0;
    students.forEach(student => {
        average = average + student.score; });
    average = average / students.length;
    return average;
}

function displayAverage()
{
    var paragraph = document.getElementById("paragraph");
    paragraph.classList.add("badge");
    paragraph.classList.add("badge-info")    
    paragraph.innerText = "Average: " + calculateAverage();
    resultSection.appendChild(paragraph);
}

function addFields(){
    
    let newName = document.getElementById("newName").value;
    let newScore = document.getElementById("newScore").value;
    let newID = document.getElementById("newID").value;

    if (newScore == ""){
        return
    }
    students.push({"id":newID,"name":newName,"score":parseInt(newScore)});
    refreshTable()
}