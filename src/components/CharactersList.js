export default function CharactersList(props) {
    const { characters, setCharacters } = props;
    const resetCharacter = () => {
        setCharacters(null)
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span onClick={resetCharacter} className="back-home">Volver al inicio</span>

            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status === "Alive" ? (
                                <> <span className="alive"></span> Alive </>
                            ) : (
                                <> <span className="dead"></span> Dead </>
                            )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span onClick={resetCharacter} className="back-home">Volver al inicio</span>
        </div>

    )
};
