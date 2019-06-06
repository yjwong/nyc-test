import 'mocha';
import * as should from 'should';
import { systemUnderTest } from '../index';
import '../actions/admin';

describe('System Under Test', () => {
  it('should work', () => {
    should.strictEqual(systemUnderTest(), 42);
  });
});

