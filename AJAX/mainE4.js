$("#search-btn").on("click", function () {

    const searchTerm = $("#search-input").val();

    $.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=CLGeNCjSazg5ZogKGkmq7hse6cg8j0uU`,
        function (result) {

            const gifURL = result.data[0].embed_url;

            $("#gif-container").html(
                `<iframe src="${gifURL}" width="480" height="270"></iframe>`
            );
        }
    );

});