import { tweetsData } from "./data.js";
const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
});

document.addEventListener("click", function (e) {
  console.log("like", e.target.dataset.like);
  console.log("retweet", e.target.dataset.retweet);
  /*
Challenge:
1. When a like icon is clicked, this function
   should log out the contents of the 'data-like'
   data-attribute.

⚠️ Clicking on the page but not on the like icon
   will log out 'undefined'. That is absolutely fine.
*/
});

function getFeedHtml() {
  let feedHtml = ``;

  tweetsData.forEach(function (tweet) {
    feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
</div>
`;
  });
  return feedHtml;
}

function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
}

render();
