export type Variant = 'empty' | 'forest' | 'fire' | 'ashes' | 'litter' | 'stone' | 'water';

export type Simulator = (neighborhood: Variant[]) => (cell: Variant) => Variant

export type Mesh = Array<Array<Variant>>;