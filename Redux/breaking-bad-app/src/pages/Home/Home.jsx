import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchCharacters } from "../../redux/charactersSlice";
import "./style.css";

export default function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error}/>
  }

  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <img src={character.img} alt={character.name} className="character" />
            <div className="char_name">{character.name}</div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
