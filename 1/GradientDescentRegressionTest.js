const GradientDescentRegression = require("./GradientDescentRegression")

describe("gradient descent", () =>{
    it("m should be close to 1.0, and b should be close to 0", () =>{
        const points = [
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 3}
        ]
        let {m, b} = GradientDescentRegression.solve(points, 1000, .02)
        expect(Math.abs(m - 1) < .01).true
        expect(Math.abs(b - 0) < .01).true
    })
})