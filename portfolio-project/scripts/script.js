//Scroll to
$(document).ready(function() {
    $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false;
    });
});

// Skillbar
$('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
});

//back to top
var $btnTop = $(".btn-top")
$(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});
$btnTop.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 900)
});

// typed
$(function() {
    $(".typed").typed({
        strings: ["Developer", "Starting Front-end developer."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 20,
        // time before typing starts
        startDelay: 1000,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 10,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});

// modal
function createModal(object) {
    var root = document.getElementById("modals");
    root.innerHTML = "";
    for (var i in works) {
        for (var keys in works[i]) {
            if (works[i].title === object) {
                var obj = works[i];
                break;
            }
        }
    }
    var modal = document.createElement("div");
    modal.classList.add("modal", "fade", "bd-example-modal-lg");
    modal.id = "exampleModal";
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "exampleModalLabel");
    modal.setAttribute("aria-hidden", "true");
    // =================
    var modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "modal-lg");
    modalDialog.setAttribute("role", "document");
    // =================
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    // =================
    var modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    // =================
    var modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.id = "exampleModalLabel";
    modalTitle.innerHTML = obj.title;
    // =================
    var closeButton = document.createElement("div");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.classList.add("close", "myClose");
    // =================
    var span = document.createElement("span");
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = "&times;";
    // =================
    closeButton.appendChild(span);
    // =================
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    // =================
    var modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    // =================
    var container = document.createElement("div");
    container.className = "container";
    // =================
    var photo = document.createElement("div");
    photo.className = "photo";
    // =================
    var img = document.createElement("img");
    img.className = "img-fluid";
    img.setAttribute("src", obj.fullImg);
    img.setAttribute("alt", "Full image");
    // =================
    photo.appendChild(img);
    // =================
    var description = document.createElement("div");
    description.className = "description";
    // =================
    var descriptionHeader = document.createElement("h6");
    descriptionHeader.innerHTML = "Used:";
    // =================
    var list = document.createElement("ul");
    for (var key in obj.details) {
        var listItem = document.createElement("li");
        listItem.innerHTML = obj.details[key];
        list.appendChild(listItem);
    }
    description.appendChild(descriptionHeader);
    description.appendChild(list);
    // =================
    container.appendChild(photo);
    container.appendChild(description);
    // =================
    modalBody.appendChild(container);
    // =================
    var modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    // =================
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-dismiss", "modal");
    button.classList.add("btn", "btn-danger");
    button.innerHTML = "Close";
    // =================
    modalFooter.appendChild(button);
    // =================
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    // =================
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);
    // return modal;
    root.appendChild(modal);
}
// end modal

//lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        showArrows: true,

    });
});
//end lightbox