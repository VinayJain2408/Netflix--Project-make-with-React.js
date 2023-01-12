import { useState } from "react"

function Counter() {
    let [count, setcount] = useState(0)

    function update(e, kuchb) {
        e.preventDefault()
        // if (kuchb === 'inc') {
        //     if (count < 10 ) {
        //         setcount(count + 1)

        //     } 
        // }
        // else if(count>0){
        //     setcount(count-1)
        // }

        (kuchb === "inc") ? (setcount(count+1)) :(setcount (count - 1))
       
    }
    return (
        <>
            <a href="" onClick={(e) => update(e, 'inc')}>Increment</a>
            <p>{count}</p>
            <a href="" onClick={(e) => update(e, 'dec')}>Decrement</a>
        </>
    )

}

// function Counter(){

//     let [count , setcount]=useState(0)
//     function add(){
//         if(count <10){
//             setcount (count + 1)
//         }

//     }
//     function minus(){
//         if(count >0)
//         setcount (count - 1)
//     }

//     return (
//     <>
//         <button onClick={add}>Increment</button>
//         <p>{count}</p>
//         <button onClick={minus}>Decrement</button>
//     </>
//     )
// }
export default Counter