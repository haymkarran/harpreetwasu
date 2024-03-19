<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$slugFromUrl = $_GET['slug'];


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


function fetchDetailArticles($slugFromUrl) {
    $rss_feed = simplexml_load_file('https://medium.com/@harpreetwasu/feed'); // Replace the URL with your desired RSS feed
    $articles = [];

    if ($rss_feed) {
        foreach ($rss_feed->channel->item as $article) {
            $authorProfileLink = "https://medium.com/@{$article->children('dc', true)->creator}";
            $profilePage = file_get_contents($authorProfileLink);
            preg_match('/<img[^>]+src="([^">]+)"/', $article->children('content', true)->encoded, $matches);
            $firstImage = isset($matches[1]) ? $matches[1] : '';
			
            $description = (string)$article->description;
            if (empty($description)) {
                $content = (string)$article->children('content', true)->encoded;
				$wordCount = str_word_count(strip_tags($content));
				$readingSpeed = 130; 
				$readingTime = ceil($wordCount / $readingSpeed). ' min read';
            } else {
                $content = $description;
				$readingTime = '';
            }
			$slugVal = createSlug($article->title);

            $categories = [];
            foreach ($article->category as $category) {
                $categories[] = (string)$category;
            }
			$status = stripos($content, 'Continue reading on') !== false ? 'Premium' : 'Free';
			if(strtolower($slugVal) === strtolower($_GET['slug'])){
				$articleData = [
					'title' => (string)$article->title,
					'slug' => createSlug($article->title),
					'link' => (string)$article->link,
					'pubDate' => (string)$article->pubDate,
					'pubAgo' => timeAgo($article->pubDate),
					'content' => $content,
					'authorName' => (string)$article->children('dc', true)->creator,
					'thumbnailImage' => $firstImage,
					'categories' => $categories,
					'status' => $status,
					'readingTime' => $readingTime,
				];

				array_push($articles, $articleData);
			}
        }
    }

    return $articles;
}



if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['slug']) && isset($_GET['action']) && $_GET['action'] === 'fetchDetailArticles') {
    echo json_encode(fetchDetailArticles($_GET['slug']));
    exit();
}

echo json_encode(['error' => 'Invalid request']);
?>
