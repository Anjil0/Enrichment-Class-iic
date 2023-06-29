import React from 'react'
import "./css/All.css"
// const birthdayusers = [
//     {
//         name: 'John Doe',
//         dob: '12/12/2020',
//         age: 18,
//         gender: 'Male'
//     },
//     {
//         name: 'Jhonny Doe',
//         dob: '12/12/2015',
//         age: 20,
//         gender: 'Male'
//     },
//     {
//         name: 'OP Doe',
//         dob: '12/12/2012',
//         age: 25,
//         gender: 'Male'
//     },
// ]
const Home = () => {
    const styleswhole = {
        padding: '10px',
        margin: "30px auto",
        width: '500px',
        border: "1px solid #ccc",
    }
    const style = {
        color: 'brown',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: "10px",
    }
    const divperson = {
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4',
        margin: "10px auto",
        width: '500px',
        border: '1px solid #ccc',
        display: 'flex',
    }

    const imgstyle = {
        width: '80px',
        height: "80px",
        borderRadius: '50%',
        margin: "10px",
    }
    const detailsstyles = {
        margin: '10px 0px 10px 20px',
    }
    return (
        <>
            <h2 style={{ margin: '30px', textAlign: "center" }}>Birthday Wishes</h2>
            <div style={styleswhole}>
                <div style={style}>
                    <h1>Today's Birthday</h1>
                </div>
                <div style={divperson}>
                    <img style={imgstyle} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="PIc" />
                    <div style={detailsstyles}>
                        <h2 style={{ color: 'brown' }}>John Doe</h2>
                        <p style={{ color: 'brown', paddingTop: '5px' }}>DOB:- 12/12/2020</p>
                        <p style={{ color: 'brown', paddingTop: '5px' }}>Age:- 21</p>
                        <p style={{ paddingTop: '5px', color: "#777", fontStyle: "italic", fontSize: '20px' }}>Message: Happy Birthday Boss</p>
                    </div>
                </div>
            </div>

            <div style={styleswhole}>
                <div style={style}>
                    <h1>Upcomming Birthdays</h1>
                </div>
                <div style={divperson}>
                    <img style={imgstyle} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="PIc" />
                    <div style={detailsstyles}>
                        <h2 style={{ color: 'brown' }}>John Doe</h2>
                        <p style={{ color: 'brown', paddingTop: '5px' }}>DOB:- 12/12/2020</p>
                        <p style={{ color: 'brown', paddingTop: '5px' }}>Age:- 21</p>
                        <p style={{ paddingTop: '5px', color: "#777", fontStyle: "italic", fontSize: '20px' }}>Message: Happy Birthday Boss</p>
                    </div>
                </div>
            </div>
               {/* <div>
             {
                    birthdayusers.map((singleUser) => {
                        return (
                            <div> 
                                <p>{singleUser.name}</p>
                                <p>{singleUser.dob}</p>
                            </div>
                        )
                    })
                 }
                 
            </div> */}
        </>

    )
}
export default Home