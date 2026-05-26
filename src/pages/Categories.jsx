import React, { useState } from 'react';
import GameCard from '../components/GameCard';

function Categories({ games, active }) {
  const [data, setData] = useState(games);
  const [filterData, setFilterData] = useState([
    { id: 1, name: 'All', active: true },
    { id: 2, name: 'RPG', active: false },
    { id: 3, name: 'MOBA', active: false },
    { id: 4, name: 'Battle', active: false },
    { id: 5, name: 'Racing', active: false },
    { id: 6, name: 'Fighting', active: false },
  ]);

  const handleFilterGames = (category) => {
    setFilterData(
      filterData.map(filter => ({
        ...filter,
        active: filter.name === category,
      }))
    );
    if (category === 'All') {
      setData(games);
    } else {
      setData(games.filter(game => game.category === category));
    }
  };

  const handleSearchGames = (e) => {
    setData(
      games.filter(game =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <section id="categories" className={`categories ${active ? 'active' : ''}`}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filterData.map(filter => (
                <li
                  key={filter.id}
                  className={`${filter.active ? 'active' : ''}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input type="text" name="search" placeholder="Search" onChange={handleSearchGames} />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
