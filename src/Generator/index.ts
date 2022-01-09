import path from 'path';

import icons from '../meta';

const rootDir = path.join(__dirname, 'assets');
const filesDir = path.join(rootDir, 'icons', 'files');
const foldersDir = path.join(rootDir, 'icons', 'folders');

type FileType = 'folders' | 'files';

const getRandomFile = (fileType: FileType): string => {
    const files: string[] = icons[fileType];
    const randomFile = files[Math.floor(Math.random() * files.length)];

    return randomFile;
};

const getFile = (type: string): string => {
    if (type === 'Directory') {
        const randomFile = getRandomFile('folders');
        const file = path.join(foldersDir, randomFile);
        return file;
    }
    const randomFile = getRandomFile('files');
    const file = path.join(filesDir, randomFile);
    return file;
};

export default getFile;
