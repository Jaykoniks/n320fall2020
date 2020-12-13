//Jacob Shirley
//12/12/20

// Retrieves json file data
fetch("data/data.json")
.then(response => {
    return response.json();
})
.then((data) => {
    appendData(data);
})

// Does everything; necessary to deal with scope issues
function appendData(data) {
    // Container for everything data-related on page
    var container = document.getElementById("listPage");
    // Sets up list items
    for (var i = 0; i < data.length; i++) {
        // Creates div
        var div = document.createElement("div");
        // Sets div to contain content for each object in json file
        div.innerHTML = '<div class="listHolder" style=""><img ' + i + ' class="listIMG" src="' + data[i].image + '" alt="' + data[i].name + '"><h1 class="listText">' + data[i].name + '</h1></div>';
        container.appendChild(div);
    }
    // Sets up expanded view for each item
    for (var i = 0; i < data.length; i++) {
        // Creates div
        var div2 = document.createElement("div");
        // Sets div to contain content for each object in json file
        div2.innerHTML = '<div id="' + data[i].name + '"><div id="' + i + '" class="backButton">Back</div><div class="expandHolder"><img class="expandIMG" src="' + data[i].image + '" alt="' + data[i].name + '"><div class="textHolder"><h1 class="monsterName">' + data[i].name + '</h1><i>' + data[i].abilities[0] + ', ' + data[i].abilities[1] + ', ' + data[i].abilities[2] + '</i><p class="monDesc">' + data[i].description + '</p></div></div></div>';
        container.appendChild(div2);
        // Grabs each item seperately
        let currentItem = document.getElementById(data[i].name)
        // Makes each expanded view item invisible and realigns it
        TweenMax.to(currentItem,
            {duration: 0, alpha:0, x:-150}
        )
    }

    // Grabs each list item and each back button
    let listItem = document.getElementsByClassName("listHolder");
    let backs = document.getElementsByClassName("backButton");
    // Sets list items to have hover properties and to activate "view" function on click
    for(i=0;i<listItem.length;i++) {
        listItem[i].addEventListener("mouseover", highlight); 
        listItem[i].addEventListener("mouseout", unhighlight); 
        listItem[i].addEventListener("click", view); 
    }
    // Sets back buttons to have hover properties and to activate "goBack" function on click
    for(i=0;i<backs.length;i++) {
        backs[i].addEventListener("click", goBack); 
        backs[i].addEventListener("mouseover", highlight); 
        backs[i].addEventListener("mouseout", unhighlight); 
    }
    // Back button
    function goBack() {
        // Grabs the currently active expanded view
        let relevant = this;
        let indexNum = relevant.getAttribute("id");
        let relData = data[indexNum].name;
        let relExpand = document.getElementById(relData);
        // Makes expanded view invisible and moves it out of the way
        TweenMax.to(relExpand,
            {duration: 1, alpha:0, y:1000}
        )
        // Puts list items back and makes them visible
        TweenMax.to(listItem,
            {duration: 1, alpha:1, x:0}
        )
    }
    // Makes buttons change color on mouse over
    function highlight() {
        let relevant = this;
        relevant.setAttribute("style", "background-color:darkblue;");
    }
    // Makes buttons change color back when mouse is no longer over button
    function unhighlight() {
        let relevant = this;
        relevant.setAttribute("style", "background-color:bisque;");
    }
    // Hides list items and displays expanded view of chosen item
    function view() {
        // Grabs corresponding expanded view
        let relevant = this;
        let indexNum = relevant.innerHTML[5];
        let relData = data[indexNum].name;
        let relExpand = document.getElementById(relData);
        // Makes list items invisible and moves them out of the way
        TweenMax.to(listItem,
            {duration: 1, alpha:0, x:-1000}
        )
        // Makes corresponding expanded view visible and moves it into place
        TweenMax.to(relExpand,
            {duration: 1, alpha:1, y:-1000}
        )
    }
}