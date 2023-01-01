export type Variant = 'empty' | 'forest' | 'fire';

export type Simulator = (neighborhood: Variant[]) => (cell: Variant) => Variant

export type Mesh = Array<Array<Variant>>;