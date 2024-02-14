function TrafficLight(){
    const red = document.getElementById('red')
    const yellow = document.getElementById('yellow')
    const green = document.getElementById('green')

    function Red(){
        red.style.backgroundColor ='red';
        yellow.style.backgroundColor ='rgba(124, 124, 1, 0.993)';
        green.style.backgroundColor ='green';
        setTimeout(Yellow, 2000)  
    }


    function Yellow(){
        red.style.backgroundColor =' rgba(174, 3, 3, 0.999)';
        yellow.style.backgroundColor ='yellow';
        green.style.backgroundColor ='green';
        setTimeout(Green, 2000)     
    }


    function Green(){
        red.style.backgroundColor =' rgba(174, 3, 3, 0.999)';
        yellow.style.backgroundColor ='rgba(124, 124, 1, 0.993)';
        green.style.backgroundColor ='greenYellow';
        setTimeout(Red, 2000)
    }
    Red();
}

TrafficLight();