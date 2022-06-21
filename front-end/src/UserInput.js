import React from "react"
import DeleteSelected from "./DeleteSelected"
import NewAddition from "./NewAddition"


function UserInput({action, category, addNewCourse, addNewProfessor}){

    // function handleSubmit(e){
    //     e.preventDefault()
    
    //     fetch(`http://localhost:9292/${category}`, {
    //       method: `${action}`,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         subject: name,
    //         professor_id: 1,
    //       }),
    //     })
    //       .then((r) => r.json())
    //       .then((newCourse) => addNewCourse(newCourse))
    
    //   }
        
    return (
        <div>
            <form >
                {console.log(action)}
                {action === "POST" ? <NewAddition category={category}/> : null}
                {action === "DELETE" ? <DeleteSelected category={category}/> : null}

            </form>
        </div>
    )

}

export default UserInput