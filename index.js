function copyToClipboard(containerid) {
    var copyText = document.getElementById(containerid).innerHTML;
    console.log(copyText)
    
    // get the textarea element
    var copy = document.getElementById("copyTextarea");

    // move the content from the div to the textarea
    copy.type = 'text';

    copy.textContent = copyText;
    copy.value = copyText;

    // select the content inside the textarea
    copy.select();
    copy.setSelectionRange(0, 99999);

    // copy to the clipboard
    // document.execCommand("copy");

    if (document.execCommand('copy')) {
      console.log('Success')
    }

    copy.type = 'hidden';


}
