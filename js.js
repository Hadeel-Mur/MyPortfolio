var data = {
    earthenware:{
      name: 'earthenware',
      container: document.getElementById('earthenware-clay'),
      images: [
        {
          src: 'https://drive.google.com/uc?export=view&id=1IswZ6i4if1g1FUKydZAcxwnCnd8TLut0'
        },
        {
          src: 'https://drive.google.com/uc?export=view&id=1-jPK5crmCRdkwP7IwcO9lvDCLDl0IjFM'
        },
        {
          src: 'https://drive.google.com/uc?export=view&id=1B6HdpASEZPwunwFWaXC3xxQih9JJ0KNn'
        },
        {
          src: 'https://drive.google.com/uc?export=view&id=1D-Yd5SQRlEL-oWpKOrd4P2_BUg7NNgxQ'
        }
        ],
      translate: 0
    },
    stoneware:{
      name: 'stoneware',
      container: document.getElementById('stoneware-clay'),
      images: [
          {
              src: 'https://drive.google.com/uc?export=view&id=1ffyoSubYyBuaJHJlJ_ul97J3DJ1LXbtF'
          },
          {
              src: 'https://drive.google.com/uc?export=view&id=11LcQZPmskP-xOj05E62aGN8cpYrZVlAl'
          },
          {
              src: 'https://drive.google.com/uc?export=view&id=1JkbMpzregbtW9di50PYRADqBPk0rAQ9l'
          },
          {
              src: 'https://drive.google.com/uc?export=view&id=1eP3rtMsmD7Iw6WfmZ6wGdyepxfVFLYVU'
          },
        ],
      translate: 0
    }
  }
  
  function setSlider(material) {
    for (let i in material.images) {
      if (i == 0) {
        material.container.innerHTML += `
  <div class="image-container" id="first-image-${material.name}">
    <img src="${material.images[i].src}" alt="${material.name}${i}" />
    <div class='slider-index'>${material.name} 1</div>
  </div>`
      } else {
        material.container.innerHTML += `
  <div class="image-container">
    <img src="${material.images[i].src}" alt="${material.name}${i}" />
    <div class='slider-index'>${material.name} ${ Number(i)+1 }</div>
  </div>`;
      };
    };
  }
  setSlider(data.earthenware);
  setSlider(data.stoneware);
  
  function toMove(orientation,material) {
  var maxStep = (data[material].images.length - 1) * 100;
    let translate = data[material].translate;
    if (orientation === 'p') {
      if (translate != 0) {
        translate = translate - 100;
      } else {
        translate = maxStep;
      }
    } else if (orientation === 'n') {
      if (translate != maxStep ){
        translate = translate + 100;
      } else {
        translate = 0;
      }
    }
    data[material].translate = translate
    var container = document.getElementById(`first-image-${data[material].name}`);
    container.style.marginLeft = '-' + translate + '%';
  }
  
  
  //autoPlay
  var sliderAutoPlay = setInterval(function() {
      toMove('n', 'earthenware');
      toMove('n', 'stoneware');
  }, 30000);