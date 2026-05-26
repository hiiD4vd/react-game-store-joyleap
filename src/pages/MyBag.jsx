import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function MyBag({ active }) {
  const { bag, removeFromBag } = useContext(AppContext);
  const total = bag.reduce((acc, game) => acc + (game.price * (1 - game.discount)), 0);

  return (
    <section id="bag" className={`bag ${active ? 'active' : ''}`}>
      <div className="container-fluid mt-2">
        <div className="row mb-4">
          <div className="col-lg-12 d-flex align-items-center">
            <h1>My Bag</h1>
          </div>
        </div>
        
        {bag.length === 0 ? (
          <div className="row">
            <div className="col-12 text-center text-white-50 mt-5">
              <h4>Your bag is empty</h4>
              <p>Add some awesome games to your bag!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="shopBagTable table table-borderless align-middle">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Preview</th>
                        <th scope="col">Game</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bag.map((game, index) => (
                        <tr className="shopBagItem" key={game._id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <img src={game.img} alt={game.title} className="img-fluid" />
                          </td>
                          <td>{game.title}</td>
                          <td>${game.price.toFixed(2)}</td>
                          <td>{game.discount * 100}%</td>
                          <td>${(game.price * (1 - game.discount)).toFixed(2)}</td>
                          <td>
                            <a href="#" onClick={(e) => { e.preventDefault(); removeFromBag(game._id); }}>
                              <i className="bi bi-trash"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="row mt-4 d-flex align-items-center">
              <div className="col-lg-6">
                <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 0 }}>
                  Total Items: {bag.length}
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 0 }} className="me-3">
                  Total: ${total.toFixed(2)}
                </p>
                <a href="#" className="orderBtn d-inline-flex align-items-center">
                  Check out <i className="bi bi-credit-card-fill ms-2"></i>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default MyBag;
