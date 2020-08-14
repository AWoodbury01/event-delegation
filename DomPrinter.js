function buildTaskForm(){
    return `
    <form>
        <input id="new-task-input" type="text" placeholder="New Task"
    </form>
    <button id="new-task-submit-btn">Submit</button>
    `
}

function buildSingleTask(nameOfTask){
    return `<section>
        <p>${Date.now().toString()}</p>
        <p>${nameOfTask}</p>
    </section>`
}
