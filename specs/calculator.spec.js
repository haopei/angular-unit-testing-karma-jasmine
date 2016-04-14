describe('Calculator', function() {

    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it('can add two numbers', function() {
        expect(calculator.add(1, 2)).toBe(3);
    });
});
