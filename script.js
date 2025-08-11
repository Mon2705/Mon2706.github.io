const songs = [
  {
    title: "เพลงที่ 1",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "เพลงที่ 2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "เพลงที่ 3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

const playlist = document.getElementById('playlist');
const player = document.getElementById('player');
let currentIndex = 0;

// สร้างรายการเพลง
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = song.title;
  li.onclick = () => playSong(index);
  playlist.appendChild(li);
});

function playSong(index) {
  currentIndex = index;
  player.src = songs[index].url;
  player.play();
}

// เล่นเพลงถัดไปอัตโนมัติ
player.onended = () => {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
};
