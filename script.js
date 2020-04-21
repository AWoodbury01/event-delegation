function buildTaskForm(){
    return `
    <form>
        <input type="text" placeholder="New Task"
    </form>
    <button id="new-task-submit-btn">Submit</button>
    `
}

//Function that builds and printes a single task
document.querySelector("#my-to-do-list").addEventListener("click", function(){
    if (event.target.id === "new-task-submit-btn") {
        console.log("This is the submit button")
    }
})

document.querySelector("#my-to-do-list").addEventListener("click",
function(){
    const pageContentContainer = document.querySelector("#pagecontent")
    pageContentContainer.innerHTML =`
    <h1>My To Do List</h1>`
    pageContentContainer.innerHTML += buildTaskForm()
})

document.querySelector("#family-to-do-list").addEventListener("click",
function(){
    document.querySelector("#pagecontent").innerHTML =`
    <h1>Family To Do List</h1>`

})

document.querySelector("#completed-tasks").addEventListener("click",
function(){
    document.querySelector("#pagecontent").innerHTML =`
    <h1>Completed Tasks</h1>`
})

