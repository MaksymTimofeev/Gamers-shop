window.onload = (e) => {
  const img = new Image();
  img.src = './clue.jpg';
  img.onload = function () {
    draw(this);
  };

  function draw(img) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const invert = function () {
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
      }
      ctx.putImageData(imageData, 0, 0);
    };

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = 255; // red
      data[i + 1] = 255; // green
      data[i + 2] = 255; // blue
    }
    ctx.putImageData(imageData, 0, 0);
    const invertbtn = document.getElementById('invertbtn');
    invertbtn.addEventListener('click', invert);
    const grayscalebtn = document.getElementById('grayscalebtn');
    // grayscalebtn.addEventListener('click', grayscale);
  }
};
