const app = new Vue({
    el: "#app",
    data: {
        num1: 0,
        num2: 0,
        answer:0,
    },
    methods: {
        calc: function() {
            this.answer = this.num1 + this.num2;
        }
    },
})