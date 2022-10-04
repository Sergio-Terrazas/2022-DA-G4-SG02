function Welcome(props) {
    return (
        <div>
             <p> - Ingenieria{props.name}</p>
        </div>
    );
  }
  
  function Props() {
    return (
      <div>
        <h1>Experiencia 03 Props - B</h1>
        <h2>Las carreras de Ingenieria son: </h2>
        <Welcome name=" Sistemas" />
        <Welcome name=" Minas" />
        <Welcome name=" Civil" />
      </div>
    );
  }


export default Props;