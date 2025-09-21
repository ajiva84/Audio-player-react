import { useState, useRef } from "react";

export function Home() {
  const player = useRef(null);
  const list = [
    { id: 1, category: "game", name: "Mario Castle", url: "files/mario/songs/castle.mp3" },
    { id: 2, category: "game", name: "Mario Star", url: "files/mario/songs/hurry-starman.mp3" },
    { id: 3, category: "game", name: "Mario Overworld", url: "files/mario/songs/overworld.mp3" },
    { id: 4, category: "game", name: "Mario Stage 1", url: "files/mario/songs/stage1.mp3" },
    { id: 5, category: "game", name: "Mario Stage 2", url: "files/mario/songs/stage2.mp3" },
    { id: 6, category: "game", name: "Mario Star", url: "files/mario/songs/starman.mp3" },
    { id: 7, category: "game", name: "Mario Underworld", url: "files/mario/songs/underworld.mp3" },
    { id: 8, category: "game", name: "Mario Underwater", url: "files/mario/songs/underwater.mp3" },
    { id: 9, category: "game", name: "Zelda Castle", url: "files/videogame/songs/zelda_castle.mp3" },
    { id: 10, category: "game", name: "Zelda Outworld", url: "files/videogame/songs/zelda_outworld.mp3" },
    { id: 11, category: "game", name: "Zelda Titles", url: "files/videogame/songs/zelda_title.mp3" },
    { id: 11, category: "game", name: "Sonic Brain Zone", url: "files/videogame/songs/sonic_brain-zone.mp3" },
    { id: 11, category: "game", name: "Zelda Link To Past", url: "files/videogame/songs/zelda_link-to-past.mp3" },
    { id: 12, category: "cartoon", name: "Flintstones", url: "files/cartoons/songs/flintstones.mp3" },
    { id: 13, category: "cartoon", name: "power-rangers", url: "files/cartoons/songs/power-rangers.mp3" },
    { id: 14, category: "cartoon", name: "simpsons", url: "files/cartoons/songs/simpsons.mp3" },
    { id: 15, category: "cartoon", name: "south-park", url: "files/cartoons/songs/south-park.mp3" },
    { id: 16, category: "cartoon", name: "thundercats", url: "files/cartoons/songs/thundercats.mp3" },
    { id: 17, category: "cartoon", name: "x-men", url: "files/cartoons/songs/x-men.mp3" }
  ];
  const [src, setSrc] = useState("");
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSongClick = index => {
    const song = `https://assets.breatheco.de/apis/sound/${list[index].url}`;
    setSrc(song);
    if (playing) {
      handlePauseClick();
    }
    setTimeout(() => {
      handlePlayClick();
    }, 100);
    setCurrentIndex(index);
  };

  const handlePauseClick = () => {
    if (player.current) {
      player.current.pause();
    }
    setPlaying(false);
  };

  const handlePlayClick = () => {
    if (player.current) {
      player.current.play();
      setPlaying(true);
    }
  };

  const handleLeftClick = () => {
    const next = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
    handlePauseClick();
    handleSongClick(next);
    setCurrentIndex(next);
  };

  const handleRightClick = () => {
    const next = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
    handlePauseClick();
    handleSongClick(next);
    setCurrentIndex(next);
  };

  return (
    <div className="text-center py-3 px-1 player">
      <audio ref={player} src={src} />
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleSongClick(index)}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="nav" />
      <i className="fas fa-caret-square-left mr-3" onClick={handleLeftClick} />
      {playing ? (
        <i className="fas fa-pause" onClick={handlePauseClick} />
      ) : (
        <i className="fas fa-play" onClick={handlePlayClick} />
      )}
      <i className="fas fa-caret-square-right ml-3" onClick={handleRightClick} />
    </div>
  );
}

