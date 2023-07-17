require ( './helpers.js' );

const sinon = require( 'sinon' )

describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      const result = totalBatteries(batteryBatches);
      expect(result).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      const expected = 31;
      const result = totalBatteries(batteryBatches);
      expect(result).to.eql(expected);
    });
  });
});
