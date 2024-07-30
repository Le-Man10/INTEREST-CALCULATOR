function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const years = document.getElementById("years");
    const Principal = document.getElementById("Principal");
    const Interest = document.getElementById("rate");

    let principal = Number(Principal.value);
    let rate = Number(Interest.value /100);
    let Years = Number(years.value);
    if(principal<0 || isNaN(principal)){
        principal = 0;
        Principal.value = 0;
    }
    if(rate<0 || isNaN(rate)){
        rate  = 0;
        Interest.value = 0;
    }
    if(Years<0 || isNaN(Years)){
        Years = 0;
        years.value = 0;
    }

    const result = principal * Math.pow((1 + rate /1),1*Years);
    totalAmount.textContent = result.toLocaleString(undefined, {style:"currency",currency:"USD"})

}