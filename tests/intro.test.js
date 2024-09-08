import {describe,expect,it
} from 'vitest';
import { factorial, fizzBuzz } from '../src/intro';

describe('fizzBuzz',()=>{
  it('shoud return FizzBuzz if n can divide on 3 and 5',()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })
  it('should return Fizz  if n can divide on 3 only',()=>{
    expect(fizzBuzz(6)).toBe('Fizz');
  });
  it('should return Buzz if n can divide on 5 only',()=>{
    expect(fizzBuzz(25)).toBe('Buzz');
  });
});

describe('factorial',()=>{
  it('shoud return 1 if n = 1 or 0',()=>{
    expect(factorial(0)).toBe(1);
  })
  it('shoud return 2 if n = 2',()=>{
    expect(factorial(2)).toBe(2)
  })
  it('shoud reutnr 6 if n = 3',()=>{
    expect(factorial(3)).toBe(6)
  });
  it('shoud return undefined if n = negative number',()=>{
    expect(factorial(-1)).toBeUndefined();
  })
})