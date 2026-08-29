/* 呆萌黄色小鸡装饰：在页面底部站一排摇摇晃晃的小鸡 */
(function () {
  /* 每只小鸡的位置与大小（x: 水平位置%，y: 离底部距离px，s: 缩放） */
  var spots = [
    { x: 7,  y: 12, s: 0.78, d: 0 },
    { x: 43, y: 3,  s: 1.05, d: -1.5 },
    { x: 81, y: 16, s: 0.62, d: -2.7 }
  ];

  var box = document.createElement('div');
  box.className = 'chick-deco';
  box.setAttribute('aria-hidden', 'true');

  spots.forEach(function (p) {
    var chick = document.createElement('div');
    chick.className = 'chick';
    chick.style.setProperty('--x', p.x + '%');
    chick.style.setProperty('--y', p.y + 'px');
    chick.style.setProperty('--s', p.s);
    chick.style.setProperty('--t', (3.2 + Math.random() * 1.4).toFixed(2) + 's');
    chick.style.setProperty('--d', p.d + 's');

    chick.innerHTML =
      '<div class="chick-body">' +
        '<i class="hair"></i>' +
        '<i class="eye left"></i>' +
        '<i class="eye right"></i>' +
        '<i class="cheek left"></i>' +
        '<i class="cheek right"></i>' +
        '<i class="beak"></i>' +
        '<i class="wing left"></i>' +
        '<i class="wing right"></i>' +
        '<i class="feet"></i>' +
      '</div>';

    box.appendChild(chick);
  });

  document.body.appendChild(box);
})();
