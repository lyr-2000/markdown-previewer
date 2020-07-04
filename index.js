//When I enter text into the #editor element, the #preview element is updated as 
//I type to display the content of the textarea


// GitHub flavored markdown into #editor => rendered as HTML in the #preview element
//using https://github.com/markedjs/marked

//The default text in the #editor: 
//a header (H1 size), a sub header (H2 size), a link, inline code, 
//a code block, a list item, a blockquote, an image, and bolded text.

//events =>  
//change => input value change
//keyup => keyborad key up
//paste => paste content in textarea
$("#editor").on("change keyup paste", function () {
    var currentVal = $(this).val();
    $("#preview").html(currentVal);
});

function convertMarkdownToHTML() {
    return marked('# Marked in browser\n\nRendered by **marked**.');
}

//!!! => onload() deprecated
$(window).on('load', function () {
    console.log(convertMarkdownToHTML());
    $("#preview").html(convertMarkdownToHTML())
});

