const math = require("mathjs")
describe("mathjs", () =>{

    it("should dot product", () =>{
        let output = math.dot([2, 4, 1], [2, 2, 3])
        expect(output).equal(15);
    })

    it("should map over values", () =>{
        let matrix = math.matrix([[1, 1], [2, 2]])
        let transformed = matrix.map(x => x + 1)
        expect(math.subset(transformed, math.index(0, 0))).equal(2)
        expect(math.subset(transformed, math.index(1, 1))).equal(3)
    })
})