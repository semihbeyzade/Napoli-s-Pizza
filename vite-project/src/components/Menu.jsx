import React from "react";

function Menu(dataMenus) {
  console.log(dataMenus);
 
  return (
     
    <div>
      <div className="menu-top d-flex flex-column justify-content-center align-items-center font-monospace">
        <h2 className="fw-bold">Our Menu</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mt-3 mb-5">
          <div className="col">
            <div className="card">
              <img src="../img/pizza1.jpg " className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title fw-bold">Pepperoni Pizza</h5>
                <p className="card-text">15 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza2.jpg " className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Vegeteriana Pizza</h5>
                <p className="card-text">8 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Stagioni Pizza</h5>
                <p className="card-text">10 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Capricciosa Pizza</h5>
                <p className="card-text">12 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Napolitana Pizza</h5>
                <p className="card-text">9 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Frutti Pizza</h5>
                <p className="card-text">11 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza7.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Margarita Pizza</h5>
                <p className="card-text">8 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza8.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Romana Pizza</h5>
                <p className="card-text">11 $</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../img/pizza9.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Mozarella Pizza</h5>
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



