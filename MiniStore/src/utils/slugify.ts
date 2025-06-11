export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD') // remove acentos
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '') // remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-');
};
