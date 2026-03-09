import * as migration_20260309_072337_add_image_url_fields from './20260309_072337_add_image_url_fields';

export const migrations = [
  {
    up: migration_20260309_072337_add_image_url_fields.up,
    down: migration_20260309_072337_add_image_url_fields.down,
    name: '20260309_072337_add_image_url_fields'
  },
];
