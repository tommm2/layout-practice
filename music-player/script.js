const { ref, reactive, computed, onMounted } = Vue;
const app = {
  setup() {
    const index = ref(0);
    const isPlay = ref(false);
    const data = reactive([
      {
        name: "The Jazz Piano",
        author: "Benjamin Tissot",
        img: "./img/thejazzpiano.jpg",
        song: "./audio/bensound-thejazzpiano.mp3",
      },
      {
        name: "Tomrrow",
        author: "Benjamin Tissot",
        img: "./img/tomorrow.jpg",
        song: "./audio/bensound-tomorrow.mp3",
      },
      {
        name: "Romatic",
        author: "Benjamin Tissot",
        img: "./img/romantic.jpg",
        song: "./audio/bensound-romantic.mp3",
      },
    ]);
    const audio = ref(null);
    const progress = ref(0);
    const timestamp = ref("00:00");
    const playSong = () => {
      isPlay.value = !isPlay.value;
      if (isPlay.value) {
        audio.value.play();
      } else [audio.value.pause()];
    };
    const reset = () => {
      audio.value.load();
      isPlay.value = false;
    };
    const setTime = (e) => {
      const width = e.target.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.value.duration;
      audio.value.currentTime = (clickX / width) * duration;
    };
    const nextSong = () => {
      index.value++;
      if (index.value > data.length - 1) {
        index.value = 0;
      }
      reset();
      playSong();
    };
    const prevSong = () => {
      index.value--;
      if (index.value < 0) {
        index.value = data.length - 1;
      }
      reset();
      playSong();
    };
    const updateProgress = () => {
      const { duration, currentTime } = audio.value;
      const time = (currentTime / duration) * 100;
      let min = Math.floor(time / 60);
      let sec = Math.floor(time % 60);

      min = min < 10 ? `0${min}` : `${min}`;
      sec = sec < 10 ? `0${sec}` : `${sec}`;

      timestamp.value = `${min} : ${sec}`;
      progress.value = `${time}%`;
    };
    const currentTime = ref(null)
    onMounted(() => {
      setInterval(() => {
        const date = new Date()
        let hour = date.getHours() < 10 ? `0${date.getHours() }` : `${date.getHours()}`
        let min = date.getMinutes() < 10 ? `0${date.getMinutes() }` : `${date.getMinutes()}`
        let sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
        currentTime.value = `${hour}:${min}:${sec}`
      }, 1000);
    });
    return {
      currentTime,
      index,
      data,
      audio,
      isPlay,
      progress,
      timestamp,
      playSong,
      nextSong,
      prevSong,
      setTime,
      updateProgress,
    };
  },
};

Vue.createApp(app).mount("#app");
