/**
 *
 * TotalCost function = ∑ (ŷ - y)²
 * y - actual y value corresponding to a given x
 *
 * ŷ - is our models guess for a given x
 * ŷ = mx + b
 *
 * TotalCost = ∑ ((mx + b) - y)²
 *
 * We take partial derivatives of our two variables that we are trying to optimize (m,b)
 * The partial derivatives will give us the components for our gradient
 *
 * dC/dm = ∑ 2x((mx + b) - y)
 * dC/db = ∑ 2((mx + b) - y)
 *
 * gradient = ∇=  f(x,y) = ∑ 2x((mx + b) - y) m^   +   ∑ 2((mx + b) - y) b^
 *
 */

class GradientDescentRegression {

    /**
     *
     * @param points
     * @param loops
     * @param learningRate
     * @returns {{m: number, b: number}}
     */

    static solve(points, loops, learningRate){
        let m = 0;
        let b = 0;


        for (let i = 0; i < loops; i++) {
            let mGradient = 0;
            let bGradient = 0;

            for (let i = 0; i < points.length; i++) {
                let point = points[i]
                mGradient += GradientDescentRegression.getMComponent(m, b, point.x, point.y)
                bGradient += GradientDescentRegression.getBComponent(m, b, point.x, point.y)
            }
            b -= bGradient * learningRate
            m -= mGradient * learningRate
        }

        return {m, b}
    }

    /**
     * This function is the derivative of the cost function with respect to b. It will give the magnitude of the b component given the current m,b and point.
     *
     *
     * @param mCurrent
     * @param bCurrent
     * @param xActual
     * @param yActual
     * @returns {number}
     */
    static getBComponent(mCurrent, bCurrent, xActual, yActual){
        let component = 2 * (mCurrent * xActual + bCurrent - yActual)
        return component
    }

    static getMComponent(mCurrent, bCurrent, xActual, yActual){
        let component = 2 * xActual * (mCurrent * xActual + bCurrent - yActual)
        return component
    }

}

module.exports = GradientDescentRegression
