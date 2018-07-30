function borderGenerator(){
    let bTop = document.getElementById('b-top');
        bRight = document.getElementById('b-right');
        bBottom = document.getElementById('b-bottom');
        bLeft = document.getElementById('b-left');
        generatedBTop = document.getElementById('generated-b-top');
        generatedBRight = document.getElementById('generated-b-right');
        generatedBBottom = document.getElementById('generated-b-bottom');
        generatedBLeft = document.getElementById('generated-b-left');
        sWidth = document.getElementById('s-width');
        sHeigth = document.getElementById('s-height');
        generatedSWidth = document.getElementById('generated-s-width');
        generatedSHeigth = document.getElementById('generated-s-heigth');

        generatedEl = document.getElementById('generated-el');

    bTop.addEventListener('change', function(){
        generatedEl.style.borderTopLeftRadius = bTop.value + "%";
        generatedBTop.innerHTML = bTop.value + "%";
    });
    bRight.addEventListener('change', function(){
        generatedEl.style.borderTopRightRadius = bRight.value + "%";
        generatedBRight.innerHTML = bRight.value + "%";
    });
    bBottom.addEventListener('change', function(){
        generatedEl.style.borderBottomRightRadius = bBottom.value + "%";
        generatedBBottom.innerHTML = bBottom.value + "%";
    });
    bLeft.addEventListener('change', function(){
        generatedEl.style.borderBottomLeftRadius = bLeft.value + "%";
        generatedBLeft.innerHTML = bLeft.value + "%";
    });
    
    sWidth.addEventListener('change', function(){
        generatedEl.style.width = sWidth.value + "px";
        generatedSWidth.innerHTML = sWidth.value;
    });
    sHeigth.addEventListener('change', function(){
        generatedEl.style.height = sHeigth.value + "px";
        generatedSHeigth.innerHTML = sHeigth.value;
    });
};

borderGenerator();