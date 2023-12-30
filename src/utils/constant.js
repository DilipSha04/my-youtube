
const GOOGLE_API_KEY = "AIzaSyBtV39FyfdKnMeSd0EUuNExW8NwUP5V3I8";

 export const LIVE_CHAT_COUNT = 25;

// export const YOUTUBE_VIDEO_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA-dYqVYNF-zsrwUD98unNcLIDu0vYsEms";

export const YOUTUBE_VIDEO_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;


//export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_SEARCH_API = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="

export const YOUTUBE_VIDEO_COMMNETS_API = " https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=" + GOOGLE_API_KEY + "&videoId="

export const YOUTUBE_CHANNEL_DATA_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${GOOGLE_API_KEY}&id=`;