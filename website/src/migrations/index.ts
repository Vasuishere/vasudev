import * as migration_20260309_072337_add_image_url_fields from './20260309_072337_add_image_url_fields.ts';
import * as migration_20260309_101228 from './20260309_101228.ts';

export const migrations = [
  {
    up: migration_20260309_072337_add_image_url_fields.up,
    down: migration_20260309_072337_add_image_url_fields.down,
    name: '20260309_072337_add_image_url_fields',
  },
  {
    up: migration_20260309_101228.up,
    down: migration_20260309_101228.down,
    name: '20260309_101228'
  },
];
