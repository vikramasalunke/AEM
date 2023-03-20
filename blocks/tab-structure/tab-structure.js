
export default function decorate(block) {
    
    var moa = document.querySelectorAll('.tab-structure')[0].children[0].children[0];
    var mod = document.querySelectorAll('.tab-structure')[0].children[0].children[1];

    var moa_wrapper = document.querySelector('.moa-content-wrapper');
    var mod_wrapper = document.querySelector('.mod-content-wrapper');

    var button_mod = document.querySelector('a[href="#about-cibinqo-abrocitinib"]');
    var button_moa = document.querySelector('a[href="#bookmark"]');

    button_mod.addEventListener("click", function(){
        mod.classList.add("button-active");
        button_mod.classList.add("button-active");
        moa.classList.remove("button-active");
        button_moa.classList.remove("button-active");
        moa_wrapper.setAttribute('style','display:none');
        mod_wrapper.setAttribute('style','display:block');
        console.log(button_mod);
    });
    
    button_moa.addEventListener("click", function(){
        moa.classList.add("button-active");
        button_moa.classList.add("button-active");
        mod.classList.remove("button-active");
        button_mod.classList.remove("button-active");
        mod_wrapper.setAttribute('style','display:none');
        moa_wrapper.setAttribute('style','display:block');
        console.log(button_moa);
    })
}