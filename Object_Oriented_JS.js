class Car{
    constructor(brand, name, color,drive){
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.drive = drive
    }
    driving(){
        console.log(`${this.name}이 운전을 시작 합니다.`)
        this.drive="O"
    }
}
let civic = new Car("Honda", "Civic", "white", "X")
let edge = new Car("Ford","Edge", "black", "X")

console.log(civic)
console.log(edge)

civic.driving()
console.log(civic)
