import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
export default function decorate(block) {
    /* change to ul, li */    const ul = document.createElement('ul');
    [...block.children].forEach((row) => {
        const li = document.createElement('li');
        li.innerHTML = row.innerHTML;
        [...li.children].forEach((div) => {
            if (div.children.length === 1 && div.querySelector('picture')) 
            {
                div.className = 'cards-card-image'
                div.innerHTML = `                
                                <video controls>                  
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" poster ="https://cibinqo.pfizerpro.com//images/custom/vcbnq-7.png" >                
                                </video>                `                
                                // const video = document.createElement('video');                
                                // video.setAttribute('src', 'https://www.w3schools.com/html/mov_bbb.mp4');                
                                // video.setAttribute('controls', true)                
                                // div.append(video);                
                                // console.log(div)                
                                // div.removeChild('picture');            
                            }
            else div.className = 'cards-card-body';
            });
        ul.append(li);
    });
    ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
    block.textContent = '';
    block.append(ul);
}