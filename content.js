const STYLE_ID = 'hideSignOutButtonStyle';

function injectHideStyle() {
    if (!document.getElementById(STYLE_ID)) {
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.innerHTML = `
            a[href="/logout"], 
            a[href*="youtube.com/logout"] { 
                display: none !important; 
            }
        `;
        document.head.appendChild(style);
    }
}

injectHideStyle();

const observer = new MutationObserver(() => injectHideStyle());
observer.observe(document.body, { childList: true, subtree: true });
