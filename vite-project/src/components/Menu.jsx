import React from "react";


function Menu(props) {
    console.log(props);
    
 
    return (
        <div>
          <div className="menu-top d-flex flex-column justify-content-center align-items-center font-monospace">
            <h2 className="fw-bold menu-header"><span>Our Menu Hello</span></h2>
                <div className="w-100 text-center">
                <input  className="w-25" type="text" onChange={props.getInput} placeholder='Search your favorite pizza...' />
                </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mt-3 mb-5">
    
              {
                props.dataMenus.map((dataMenu, index) => {
                  return (
                    <div className="col" key={index}>
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



