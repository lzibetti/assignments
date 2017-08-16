import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     // <App />,
//     document.getElementById('root')
// );


// function formatName(data) {
//     return `${data.firstName} ${data.lastName}`
// }

// const person = {
//     firstName: 'Laius',
//     lastName: 'Zibetti'
// }

const person = {
    firstName: 'Laius',
    lastName: 'Zibetti',
    formatName: function(data) {
        return `${this.firstName} ${this.lastName}`
    }
}
const str = "header"
// const element = <h1 className={str}>Hello {formatName(person)}</h1>
const element = <h1 className={str}>Hello {person.formatName()}</h1>

const car = {
    make: 'BMW',
    model: '750 D',
    package: 'M',
    sound: 'Alpine',
    tires: 'premium',
    img: 'https://media.ed.edmunds-media.com/bmw/7-series/2017/oem/2017_bmw_7-series_sedan_740e-xdrive-iperformance_fq_oem_2_600.jpg',
    luxuryFeatures: function(data) {
        return `${this.package} ${this.tires}`
    }
}
const paraph = <p className="myCar">The classic cars of the 80's and 90's have given way to a bloated appearance. 
This problem was first seen in the Ford mustang. Now carried over into BMW. Case in point: {car.model} {car.luxuryFeatures()}</p>

ReactDOM.render(
    <div>
        {element}
        {paraph}
        <img src={car.img} alt={person.firstName}/>
    </div>,
    document.getElementById('root')
)