const accordians = document.querySelectorAll('.accordian');

accordians.forEach(a =>{
    const icon = a.querySelector('.icon');
    const answer= a.querySelector('.answer');

    a.addEventListener('click' , ()=>{
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})