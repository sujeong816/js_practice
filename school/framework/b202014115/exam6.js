let rectangle = {
    width: 4,
    height: 5,
    method1: function() {
        console.log(this.width * this.height);
    }
};
rectangle.method1();