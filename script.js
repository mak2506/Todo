const tasks=[];
document.getElementById("add").addEventListener("click", addTask);
var untick=document.getElementById("untick");
var tick=document.getElementById("tick");     


function addTask()
{
    var task=document.getElementById("new-task").value;
    tasks.push({"task": task, "status": ""});
    addInList();
    emptyBox();
}

function addInList()
{
    var html="";
    var tickhtml="";
    for(var i=0; i<tasks.length; i++)
    {
        //console.log("Taks: "+tasks[i]["task"]);
        if(tasks[i]["status"]=="")
        {
              html += `<div><input type="checkbox" value="${tasks[i]["task"]}" onchange="tickTask(${i})"><label>${tasks[i]["task"]}</label><button id="edit" onclick="editTask(${i})">Edit</button><button id="delete"  onclick="deleteTask(${i})">Delete</button></div>`;
        }
        else if(tasks[i]["status"]=="checked")
        {
              tickhtml += `<div><input type="checkbox" value="${tasks[i]["task"]}" onchange="tickTask(${i})" checked><label>${tasks[i]["task"]}</label><button id="edit" onclick="editTask(${i})">Edit</button><button id="delete" onclick="deleteTask(${i})">Delete</button></div>`;
        }
    }
    untick.innerHTML=html;
    tick.innerHTML=tickhtml;
}

function tickTask(key)
{
    if(tasks[key]["status"]=="")
    {
        tasks[key]["status"]="checked";
    }
    else{
        tasks[key]["status"]="";
    }
    
    addInList();
    emptyBox();
}

function editTask(key)
{
    document.getElementById("new-task").value=tasks[key]["task"];
    document.getElementById("update").style.display="inline-block";
    document.getElementById("add").style.display="none";
    document.getElementById("update").setAttribute("onclick", `updateTask(${key})`);
}

function deleteTask(key)
{
    console.log(tasks.splice(key, 1));
    addInList();
}

function updateTask(key)
{
    var task=document.getElementById("new-task").value;
    tasks[key]["task"]=task;
    document.getElementById("update").style.display="none";
    document.getElementById("add").style.display="inline-block";
    emptyBox();
    addInList();    
}

function emptyBox()
{
    document.getElementById("new-task").value="";
}



