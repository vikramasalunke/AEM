import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  block.children[0].className = 'isi-persistent-header';
  block.children[1].className = 'isi-persistent-content';
  const d = block;
  const b = block.firstElementChild.children[0];
  const abc= document.createElement('button');
  // const i= document.createElement('icon');
  d.classList.add('isi-persistent-collapse');
  abc.textContent = "Expand";
  abc.addEventListener('click', () => {
    if(abc.textContent === "Expand"){d.classList.remove('isi-persistent-collapse'); d.classList.add('isi-persistent-expanded'); abc.textContent = "Close"; }
    else { d.classList.remove('isi-persistent-expanded');d.classList.add('isi-persistent-collapse'); abc.textContent = "Expand"; }
      
  });
  b.append(abc);
  // b.append(i);

  
}
