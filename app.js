const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");



const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items=["Node-JS","Blender","Python csb-excel"];
const workItems=[];

app.get("/", function (req, res) {

   
   const day =date.getDate();

    res.render("list", { ListTitle: day, newListItems:items });

});

app.post("/", (req,res) => {
    const item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
     items.push(item);
    res.redirect("/");
    }
});

app.get("/work",(req,res)=>{
    res.render("list",{ListTitle:"Work List", newListItems:workItems});
})

app.get("/about",(req,res) => {
    res.render("about");
})

app.listen(3000);







 // let CurrentDay = today.getDay();
    // let day = "";

    // switch (CurrentDay) {
    //     case 0:
    //         day = "Sunday";
    //         console.log("current day is equal to : " + day);
    //         break;
    //     case 1:
    //         day = "Monday";
    //         console.log("current day is equal to : " + day);
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         console.log("current day is equal to : " + day);
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         console.log("current day is equal to : " + day);
    //         break;
    //     case 4:
    //         day = "Thrusday";
    //         console.log("current day is equal to : " + day)
    //         break;
    //     case 5:
    //         day = "Friday";
    //         console.log("current day is equal to : " + day);
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         console.log("current day is equal to : " + day);
    //         break;

    //     default:
    //         console.log("Error: current day is equal to : " + CurrentDay);
    //         break;
    // }