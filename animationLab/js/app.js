// Jacob Shirley
// 10.9.20

let startDelay = .5;

let pics = document.getElementsByClassName("picture");
let heady = document.getElementById("header");
let title = document.getElementById("title");

init();

function init() {

    TweenMax.from(heady,
    {duration: 1, delay: startDelay, alpha:0, x:-1000}
    )

    TweenMax.from(title,
        {duration: 1, delay: startDelay + .5, alpha:0, y:-50}
    )

    for(i=0;i<pics.length;i++) {
        TweenMax.from(pics[i],
            {duration: 1, delay: (startDelay+1+(.1*i)), alpha:0, y:20}
        );
    }
}
for(i=0;i<pics.length;i++) {
    pics[i].addEventListener("mouseover", highlight); 
    pics[i].addEventListener("mouseout", unhighlight); 
    pics[i].addEventListener("click", view); 
    console.log(pics)
    console.log(pics[i])
}

function highlight() {
    let relevant = this;
    console.log(relevant);
    relevant.setAttribute("style", "border-width:5px;border:#000;width:205px;height:105px;");
}

function unhighlight() {
    let relevant = this;
    console.log(relevant);
    relevant.setAttribute("style", "border-width:0px;border:#FFF;width:200px;height:100px;");
}

function view() {
    TweenMax.to(heady,
        {duration: 1, alpha:0, x:-1000}
        )
    
        TweenMax.to(title,
            {duration: 1, alpha:0, x:-1000}
        )
    
        for(i=0;i<pics.length;i++) {
            TweenMax.to(pics[i],
                {duration: 1,  alpha:0, x:-1000}
            );
        }
}