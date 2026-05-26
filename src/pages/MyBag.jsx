import React from 'react';

function MyBag({ games, active }) {
  return (
    <section id="bag" className={`bag ${active ? 'active' : ''}`}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-12">
            <h1>My Bag</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBag;
