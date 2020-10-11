"use strict";


var Seattle = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }

    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];

            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },




    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";

        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="Seatle";


        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);

        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];

          
        }







    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Seattle.getCustomerPerHour();
Seattle.getCookiesPerHour();
Seattle.render();
//   Seattle.render();
  // numOfCustomers*avg of cookies
  // count it for all hours
// Seattle.randCustomeers(2,7);




var Tokyo = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }

    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];

            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },




    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";

        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="Tokyo";


        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);

        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
            
          
        }







    }
}
Tokyo.getCustomerPerHour();
Tokyo.getCookiesPerHour();
Tokyo.render();








var Dubai = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }

    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];

            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },




    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";

        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="Dubai";


        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);

        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
            
          
        }







    }
}

Dubai.getCustomerPerHour();
Dubai.getCookiesPerHour();
Dubai.render();







var Paris = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }

    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];

            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },




    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";

        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="Paris";


        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);

        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
            
          
        }







    }
}

Paris.getCustomerPerHour();
Paris.getCookiesPerHour();
Paris.render();


var Lima = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }

    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];

            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },




    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";

        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="Lima";


        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);

        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
            
          
        }







    }
}

Lima.getCustomerPerHour();
Lima.getCookiesPerHour();
Lima.render();




