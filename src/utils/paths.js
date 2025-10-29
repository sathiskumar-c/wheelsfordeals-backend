import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { URL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getAbsoluteFileUrl(relativePath) {
    const absolutePath = resolve(__dirname, '..', relativePath);
    return new URL(`file:///${absolutePath.replace(/\\/g, '/')}`).href;
}

export const rootDir = resolve(__dirname, '..');
