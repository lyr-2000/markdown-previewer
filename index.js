const placeholder = `
# Markdown Previewer with Jquery

# A sub-heading...
  
A line of code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function doSomeTask(param) {
    //some code
}
\`\`\`

You can also make text **bold**...

There's also [links](https://www.facebook.com)

> Block Quotes!

1. Item 1
2. Item 2 
3. Item 3
`

function convertMarkdownToHTML(markdown) {
    return marked(markdown);
}

function setDefaultTextOnLoad() {
    $("#editor").val(placeholder)
    $("#preview").html(convertMarkdownToHTML(placeholder))
}

//!!! => onload() deprecated
$(window).on('load', function () {
    //events =>  
    //change => input value change
    //keyup => keyborad key up
    //paste => paste content in textarea
    $("#editor").on("change keyup paste", function () {
        var currentVal = $(this).val();
        $("#preview").html(convertMarkdownToHTML(currentVal));
    });

    setDefaultTextOnLoad();
});

