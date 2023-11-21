$(document).ready(function() {
    $("body")
        .on("submit", "#post_form", postTopic)
        .on("submit", "#comment_form", postComment)
        .on("click", ".edit_button", showEditForm)
        .on("submit", ".active_edit_form". saveEditForm);
});

function postTopic(event){
    event.preventDefault();                         /* Prevent the form from submitting */

    let post_textarea = $("#post_textarea").val().trim();
    let data_post_id = Math.floor(Math.random() * 1000);

    if (post_textarea){
        let cloned_topic = $("#cloned_post_topic").clone();
        cloned_topic.removeAttr("id");
        cloned_topic.attr("data-post-id", data_post_id);
        cloned_topic.find(".post_content").text(post_textarea);

        $("#no_post_yet").remove();
        $("#post_forum_list").prepend(cloned_topic);
        $("#post_textarea").val("");
    }
}

function showEditForm(event){
    event.preventDefault();                         /* Prevent the form from submitting */

    let post = $(this).closest(".post");

    let edit_form = $("#cloned_edit_form").clone();
    edit_form.removeClass("edit_form");
    edit_form.addClass("active_edit_form");
    edit_form.find(".edit_textarea").val(post.find(".post_content").text());

    post.find(".post_content").replaceWith(edit_form);

}

function saveEditForm(event){
    event.preventDefault();                         /* Prevent the form from submitting */
    
    let post = $(this).closest(".post");
    let edit_textarea = $(".edit_textarea").val().trim();
    post.find(".post_content").text(edit_textarea);

    $(".active_edit_form").closest(".post").prepend(post_content);
    $(".active_edit_form").remove();
}