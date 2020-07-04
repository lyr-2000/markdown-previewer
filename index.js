//When I enter text into the #editor element, the #preview element is updated as 
//I type to display the content of the textarea => Ok


// GitHub flavored markdown into #editor => rendered as HTML in the #preview element
//using https://github.com/markedjs/marked => Ok

//The default text in the #editor: 
//a header (H1 size), a sub header (H2 size), a link, inline code, 
//a code block, a list item, a blockquote, an image, and bolded text.

const placeholder =
    `# Markdown Previewer with Jquery

    # This is a sub-heading...
  
    Heres some code, \`<div></div>\`, between 2 backticks.

    \`\`\`
    // this is multi-line code:

    function anotherExample(firstLine, lastLine) {
        if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
            return multiLineCode;
        }
    }
    \`\`\`
  
    You can also make text **bold**...

    There's also [links](https://www.facebook.com)
    > Block Quotes!

    1. Item 1
    2. Item 2 
    3. Item 3
`

//events =>  
//change => input value change
//keyup => keyborad key up
//paste => paste content in textarea
$("#editor").on("change keyup paste", function () {
    var currentVal = $(this).val();
    $("#preview").html(currentVal);
});

function convertMarkdownToHTML(markdown) {
    return marked(markdown);
}

function setDefaultTextOnLoad() {
    $("#editor").val(convertMarkdownToHTML(placeholder))
    $("#preview").html(convertMarkdownToHTML(placeholder))
}

//!!! => onload() deprecated
$(window).on('load', function () {
    setDefaultTextOnLoad();

    // $("#preview").html(convertMarkdownToHTML())
});

