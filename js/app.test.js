const { unitDoneCount } = require('./app');

// Mock localStorage because we are in a node environment for this specific test file
const storage = {};
global.localStorage = {
  getItem: (key) => storage[key] || null,
  setItem: (key, value) => { storage[key] = value.toString(); },
  clear: () => { for (let key in storage) delete storage[key]; }
};

describe('unitDoneCount', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('returns 0 when no progress exists for the unit', () => {
    expect(unitDoneCount('unit-1')).toBe(0);
  });

  test('returns the correct count when only lessons are completed', () => {
    const progress = {
      'unit-1': {
        '0': true,
        '1': true,
        '2': true
      }
    };
    localStorage.setItem('pytrack_v3', JSON.stringify(progress));
    expect(unitDoneCount('unit-1')).toBe(3);
  });

  test('returns the correct count excluding quizzes', () => {
    const progress = {
      'unit-1': {
        '0': true,
        'q0': { score: 5, total: 5, pct: 100 },
        '1': true,
        'q1': { score: 3, total: 5, pct: 60 }
      }
    };
    localStorage.setItem('pytrack_v3', JSON.stringify(progress));
    expect(unitDoneCount('unit-1')).toBe(2);
  });
});
