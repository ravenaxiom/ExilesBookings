export const DAYS = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
export const WEEKS = ['Week A', 'Week B'];

export const SPACE_TYPES = {
  SQUARE_TABLE: 'Square Table',
  CIRCULAR_TABLE: 'Circular Table',
  RECTANGULAR_TABLE: 'Rectangular Table',
  COUCHS: 'Couchs'
};
export const GAME_SPACES = [
  {
    name: 'Table A',
    shape: SPACE_TYPES.SQUARE_TABLE,
    seats: 4
  },
  {
    name: 'Table B',
    shape: SPACE_TYPES.CIRCULAR_TABLE,
    seats: 8
  },
  {
    name: 'Couches A',
    shape: SPACE_TYPES.COUCHES,
    seats: 6
  }
];
