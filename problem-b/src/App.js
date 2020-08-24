import React, { Component } from 'react'; //import React Component
import 'style.css' // #2
import _ from 'lodash'; // #5

// #1
class App extends Component {
  
  // #8
  constructor(props) {
    super(props); 
    this.state = {pets:this.props.pets};

  }

  // #9
  adopt = (name) =>  {

    this.setState((state) => {

      let correctPetObject =  _.find(state.pets, ['name', name]);
      correctPetObject.adopted = true;

      return {pets: state.pets}; 

    });

  }

  render() {

    let pets = this.state.pets; // #8
    let breedsObject = _.groupBy(pets, 'breed');
    let breedsArray = Object.keys(breedsObject);

    // #3: AboutNav, #5: BreedNav, #7: PetList, #10: adoptCallback
    return (
      [
        <header key="header" className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>,

        <main key="main" className="container">
          <div className="row">
            <div id="navs" className="col-3">

              <BreedNav breeds={breedsArray}/>

              <AboutNav />

            </div> 

            <div id="petList" className="col-9">
              

              <PetList pets={pets} adoptCallback={this.adopt}/>


            </div> 
          </div> 
        </main>,

        <footer key="footer" className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>,
      ]
    );
  }
}

export default App;

// #3
class AboutNav extends Component {

  render() {

    return (

        <nav id="aboutLinks">
          <h2>About</h2>
          <ul className="list-unstyled">
            <li><a href="#/">How to Adopt</a></li>
            <li><a href="#/">Volunteering</a></li>
            <li><a href="#/">Events</a></li>
            <li><a href="#/">Donate</a></li>
            <li><a href="#/">About Us</a></li>
          </ul>
        </nav>

    );
  }
}

// #5
class BreedNav extends Component {

  render() {

    let breedsLi = this.props.breeds.map((breed) => {

      return (

        <li key={breed}>

          <a href="">{breed}</a>

        </li>

      );

    });

    return (

    <nav id="breedLinks">
      <h2>Pick a Breed</h2>
      <ul className="list-unstyled">
        {breedsLi}
      </ul>            
    </nav>

    );
  }
}

// #6
class PetCard extends Component {

  render() {

    let pet = this.props.pet; //make own prop name?

    let isAdopted = pet.adopted; // #9 

    let adoptCallback = this.props.adoptCallback;

    // #9: adopted status, #10: onclick
    //mfw I spent an eternity figuring out I just needed to change the onClick to an arrow function... guess I didn't follow step #10 very well )))): 
    return (
      <div className="card" onClick={() => {adoptCallback(pet.name)}}>
        <img className="card-img-top" src={pet.img} alt={pet.name} />
        <div className="card-body">
          <h3 className="card-title">{pet.name}{isAdopted ? " (Adopted)" : ""}</h3>
          <p className="card-text">{pet.sex} {pet.breed}</p>
        </div>
      </div>
  
    );
  }
}

// #7
class PetList extends Component {

  render() {

    let adoptCallback = this.props.adoptCallback; // #10

    let pets = this.props.pets;
    let petCards = pets.map((pet) => {

      return (

        <PetCard key={pet.name} pet={pet} adoptCallback={adoptCallback}/>

      );

    });

    return ([
      <h2 key="h2">Dogs for Adoption</h2>, 
      <div key="card-deck" className="card-deck">
       
        {petCards}

      </div> 
    ]);
  }
}
