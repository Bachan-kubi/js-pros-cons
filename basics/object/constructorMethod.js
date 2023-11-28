function Plan(param){
    this.name = param.name;
    this.price = param.price;
    this.data = param.data;
    this.page = param.page;
    this.discMonth = param.discMonth;
    this.calAnnual = function(rate){
        let bestPrice = this.price;
        let date = new Date();
        let curMonth = date.getMonth();
        for(let i = 0; i<this.discMonth.length; i++){
            console.log(this.discMonth);
            if(this.discMonth[i]=== curMonth){
                bestPrice = this.price * rate;
                break;
            };
        };
        return bestPrice;
    };
};

let h = new Plan({name: 'Basic', price: 10, data: 15, page: 20, discMonth: [6,7]});
let h1 = new Plan({name: 'pro', price: 12, data: 15, page: 20, discMonth: [6,7]});
let h2 = new Plan({name: 'ulti', price: 15, data: 15, page: 20, discMonth: [6,7]});
console.log(h.calAnnual(.8));
console.log(h1.calAnnual(.9));
console.log(h2.calAnnual(.7));


