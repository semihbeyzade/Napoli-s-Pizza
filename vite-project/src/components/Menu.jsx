import React from "react";

function Menu(props) {
    console.log(props.dataMenus);
    
    
    return (
        <div>
          <div className="menu-top d-flex flex-column justify-content-center align-items-center font-monospace">
            <h2 className="fw-bold">Our Menu</h2>
            <input className="w-25" type="submit" value='Search your favorite pizza...' />
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mt-3 mb-5">
    
              {
                props.dataMenus.map(dataMenu => {
                  return (
                    <div className="col">
                      <div className="card">
                        <img src={dataMenu.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{dataMenu.header}</h5>
                          <p className="card-text">{dataMenu.preis}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      );
    }

export default Menu;



