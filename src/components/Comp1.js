import React from 'react'
import './Comp1.css'

// export default function Comp1(props) {
//   return (
//     <div>
//         <p>Name: {props.firstName}</p>
//         <p>Last Name: {props.lastName}</p>
//         <p>Id: {props.id}</p>     
//     </div>
//    )
//  }

//  export default function Comp1({firstName, lastName, id}) {
//      return (
//        <div>
//            <p>Name: {firstName}</p>
//            <p>Last Name: {lastName}</p>
//            <p>Id: {id}</p>     
//        </div>
//      )
//    }

// export default function Comp1(data) {
// return (
//     <div>
//         <p>Name: {data.firstName}</p>
//         <p>Last Name: {data.lastName}</p>
//         <p>Id: {data.id}</p>     
//     </div>
// )
// }

export default function Comp1(data) {
    const {firstName, lastName, id, src} = data;
    return (
        <div className="box">
            <p>Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Id: {id}</p>
            <img 
                src={src}
                alt="test-img"
                width="300"
                height="auto"
            />


         </div>
     )
 }
