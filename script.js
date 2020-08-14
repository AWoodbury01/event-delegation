// Function that builds and prints a single task
document.querySelector("#pagecontent").addEventListener("click", function(){
    if (event.target.id === "new-task-submit-btn") {
        console.log("This is the submit button")
        const taskValue = document.querySelector("#new-task-input").value
        document.querySelector("#pagecontent").innerHTML += buildSingleTask(taskValue)
    }
})

// Navbar buttons
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

