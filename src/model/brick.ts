export interface BrickModel {
  color: Color;
  element_id: string;
  id: number;
  inv_part_id: number;
  is_spare: boolean;
  num_sets: number;
  part: Part;
  quantity: number;
  set_num: string;
}

interface External<T> {
  Bricklink: T;
  BrickOwl: T;
  LDraw: T;
  Lego: T;
  Peeron: T;
}

interface Part {
  external_ids: External<string[]>;
  name: string;
  part_cat_id: number;
  part_img_url: string;
  part_num: string;
  part_url: string;
  print_off: any;
}

interface Color {
  external_ids: External<ColorExternalId>;
  id: number;
  is_trans: boolean;
  name: string;
  rgb: string;
}

interface ColorExternalId {
  ext_descrs: string[][];
  ext_ids: number[];
}
