import React from "react";

function Menu() {


  return (
    <div>
      <div className="menu-top d-flex flex-column justify-content-center align-items-center">
        <h2 className="">Our Menu</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mt-3 mb-5">
          <div className="col">
            <div className="card">
              <img src="../img/pizza1.jpg " className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">Pepperoni Pizza</h5>
                <p className="card-text">15 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza2.jpg " className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Vegeteriana Pizza</h5>
                <p className="card-text">8 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Stagioni Pizza</h5>
                <p className="card-text">10 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Capricciosa Pizza</h5>
                <p className="card-text">12 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Napolitana Pizza</h5>
                <p className="card-text">9 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Frutti Pizza</h5>
                <p className="card-text">11 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza7.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Margarita Pizza</h5>
                <p className="card-text">8 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza8.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Romana Pizza</h5>
                <p className="card-text">11 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza9.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mozarella Pizza</h5>
                <p className="card-text">8 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;



