import { expect } from "chai";
import { add } from "../server/utils/calculator";

describe("Calculator Util", ()=>{

    it("should add 2 number and provide result", ()=>{
        expect(add(2, 6)).to.be.eq(8)
    })

    it("should return null if a is null", ()=>{
        expect(add(null, 6)).to.be.eq(null)
    })

    it("should return null if b is null", ()=>{
        expect(add(2, null)).to.be.eq(null)
    })

})