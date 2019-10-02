new Vue({
    el: '#exercise',
    data: {
        name: 'José Aderbal Aragão Filho',
        age: 29,
        imgLink: 'https://hackernoon.com/hn-images/1*ACR0gj0wbx91V_xgURifWg.png'
    },
    methods: {
        multiply: function(x, y) {
            return x * y;
        },
        randomNumber: function() {
            return Math.random();
        }
    }
})