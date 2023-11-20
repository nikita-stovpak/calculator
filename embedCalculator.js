(function() {
    var calculatorUrl = 'URL_OF_YOUR_CALCULATOR_PAGE'; // Replace with the URL of your calculator page

    // Create iframe
    var iframe = document.createElement('iframe');
    iframe.src = calculatorUrl;
    iframe.width = '100%';
    iframe.height = '400px';
    iframe.frameBorder = '0';

    // Create backlink
    var backlink = document.createElement('a');
    backlink.href = calculatorUrl;
    backlink.textContent = 'Provided by Epic Design Labs';
    backlink.style.display = 'block';
    backlink.style.textAlign = 'center';
    backlink.style.marginTop = '10px';

    // Append to the host page
    document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
    document.currentScript.parentNode.insertBefore(backlink, document.currentScript.nextSibling);
})();
