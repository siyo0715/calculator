const app = new Vue({
    el: "#app",
    data: {
        num1: 0,
        num2: 0,
    },
    computed: {
        answer: function () {
            return this.num1 + this.num2;
        },
        done: function () {
            if (this.num1 !== 0 && this.num2 !== 0) {
                return true;
            } else {
                return false;
            }
        }
    }
})