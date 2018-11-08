import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedeplat: null,
      recette: null,
      portions: null,
      field: null,
      cuisson: null,
      formErrors:{
        typedeplat: "",
          recette: "",
          portions: "",
          field: "",
          cuisson: ""
      }
    };

    
  }

  handleSubmit = 
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Recettes de cuisine</h1>
          <form onSubmit={this.handleSubmit} noValidate>

          <div className="typedeplat">
            <label htmlFor="typedeplat">Type de plat: </label>
            <input 
             type="text" 
             className=""
             placeholder="Type de plat"
             name="typedeplat" 
             noValidate
             onChange={this.handleChange}

             />
              
          </div>

            <div className="recette">
              <label htmlFor="recette">Titre de la recette: </label>
              <input
                type="text"
                className=""
                placeholder="Titre de la recette"
                name="recette"
                noValidate
                onChange={this.handleChange}

              />

            </div>

            <div className="portions">
              <label htmlFor="portions">Nombre de portions: </label>
              <input
                type="number"
                className=""
                placeholder="portions"
                name="portions"
                noValidate
                onChange={this.handleChange}

              />

            </div>

            <div className="field">
              <label className="label">Etapes de la réalisation de la recette: </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  //value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
            </div>
                            
            <div className="cuisson">
              <label htmlFor="cuisson">Temps de cuisson: </label>
              <input
                type="text"
                className=""
                placeholder="Temps de cuisson"
                name="cuisson"
                noValidate
                onChange={this.handleChange}
                />
            </div>

            <div className="field">
              <label className="label">Ingrédients: </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  //value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="creerRecette">
              <button type="submit">Créer la Recette</button>
              <small>Recette déjà existante?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
