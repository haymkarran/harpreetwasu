<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

function timeAgo($date) {
    $now = new DateTime();
    $publishedDate = new DateTime($date);
    $interval = $now->diff($publishedDate);

    if ($interval->d > 0) {
        return $interval->format('%a days ago');
    } elseif ($interval->h > 0) {
        return $interval->format('%h hours ago');
    } elseif ($interval->i > 0) {
        return $interval->format('%i minutes ago');
    } else {
        return 'Just now';
    }
}

function createSlug($string) {
    $string = strtolower($string);
    $string = preg_replace('/[^a-z0-9]+/', '-', $string);
    $string = trim($string, '-');
    
    return $string;
}


function fetchArticles() {
    $rss_feed = simplexml_load_file('https://medium.com/@harpreetwasu/feed'); //https://medium.com/@harpreetw/feed
    $articles = [];

    if ($rss_feed) {
		foreach ($rss_feed->channel->item as $article) {
			$authorProfileLink = "https://medium.com/@{$article->children('dc', true)->creator}";
			$profilePage = file_get_contents($authorProfileLink);
			preg_match('/<img[^>]+src="([^">]+)"/', $article->children('content', true)->encoded, $matches);
			$firstImage = isset($matches[1]) ? $matches[1] : '';
			if($firstImage !==""){
				$articleData = [
					'title' => (string)$article->title,
					'slug' => createSlug($article->title),
					'link' => (string)$article->link,
					'pubDate' => (string)$article->pubDate,
					'pubAgo' => timeAgo($article->pubDate),
					'content' => (string)$article->children('content', true)->encoded,
					'authorName' => (string)$article->children('dc', true)->creator,
					'thumbnailImage' => $firstImage,
				];

				array_push($articles, $articleData);
			}
		}
	}


    return $articles;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'fetchArticles') {
    echo json_encode(fetchArticles());
    exit();
}

echo json_encode(['error' => 'Invalid request']);
?>
