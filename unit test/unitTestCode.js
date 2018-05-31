var expect = chai.expect;
var assert = chai.assert;


describe("index.js模块单元测试", function() {

    it("isEmail() 邮箱验证", function() {
        // 断言
        expect(checkEmail('wowo@123.com') ).to.be.true; 
        expect(checkEmail('wowo@中国.com') ).to.be.false; 
        expect(checkEmail('中@qq.com') ).to.be.false; 
    });
    it("手机号验证",function(){
    	expect(isPhone('13800000000')).to.be.true;
    	expect(isPhone('1380000000')).to.be.false;
    	expect(isPhone('1230000000')).to.be.false;
    })
});