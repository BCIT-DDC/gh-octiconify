import { browser } from 'webextension-polyfill-ts';

import getFile from '../Generator';

console.log('Logging from content script');

const filesContainer = document.getElementById('files')?.parentNode;
const fileItems = filesContainer?.querySelectorAll('.js-navigation-item');

fileItems?.forEach((file: Element) => {
    const icon = file.getElementsByClassName('octicon')[0];
    const fileType = icon.getAttribute('aria-label');

    if (fileType) {
        const iconPath = getFile(fileType);
        const newIcon = browser.runtime.getURL(iconPath);

        // console.log(icon);
        icon.outerHTML = `
            <img
            data-view-component="true" class="octicon octicon-file${
                fileType === 'Directory' ? '-directory' : ''
            } ${
            fileType === 'Directory'
                ? 'hx_color-icon-directory'
                : 'color-fg-muted'
        }"
                aria-label="${fileType}" 
                aria-hidden="true"
                src="${newIcon}">
            </img>
        `;
    }
});
