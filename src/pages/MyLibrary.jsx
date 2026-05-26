import React from 'react';

function MyLibrary({ games, active }) {
  return (
    <section id="library" className={`library ${active ? 'active' : ''}`}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-12">
            <h1>My Library</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyLibrary;
