let rectangle1 = {
    width: 4,
    height: 5,
    method1/*: function 있어도 그만 없어도 그만*/() {
        let area = this.width * this.height;
        console.log(area);
    }
};
rectangle1.method1();
// let method1 = rectangle1.method1;
// method1(); error

let rectangle2 = {
    width: 4,
    height: 5,
    method1() {
        let getArea = () => { return this.width * this.height; };
        console.log(getArea());
    }
};
rectangle2.method1();

let rectangle3 = {
    width: 4,
    height: 5,
    method1() {
        let getArea = () => this.width * this.height;
        console.log(getArea());
    }
};
rectangle3.method1();

let rectangle4 = {
    width: 4,
    height: 5,
    method1() {
        let getArea = function() { return this.width * this.height; };
        let getArea2 = getArea.bind(rectangle4);
        console.log(getArea2());
    }
};
rectangle4.method1();