const { font, batch } = require('./index');

describe('responsive-font', () => {
  test('should process string input', () => {
    expect(font('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => font(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = font('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
