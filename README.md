# Blog-Post Manager

A frontend-only blog interface built with vanilla JavaScript and HTML. Posts are fetched from a local JSON API. The design takes inspiration from brutalism—raw, grid-based, and visually direct—with minimal abstraction and no frameworks.

## Features

### Core

- Fetches and displays all blog post titles and images on load.
- Displays full post details (title, content, author) when a post is clicked.
- Allows users to add a new post via a submission form.
- Uses a `main()` function to initialize all listeners and render logic after DOM load.

### Advanced

- Automatically renders the first post's details when the page loads.
- Changes update the UI but are  persisted to the backend.

## Data Source

This app assumes a running JSON server on:


[http://localhost:3000/posts](http://localhost:3000/posts)



Each post object includes:

```json
{
  "id": 1,
  "title": "Post Title",
  "content": "Post body content...",
  "author": "Author Name",
  "timestamp": "Current time"
}
````

To start the server:

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

## Usage

* Open `index.html` in the browser.
* Posts are loaded and rendered inside the `#post-list` div.
* Clicking a post shows full details in `#post-detail`.
* New posts can be added via the form with `#new-post-form`.

## Scripts

Main functions:

* `displayPosts()`: Fetches and renders all post titles/images.
* `handlePostClick(postId)`: Loads and displays a single post's full details.
* `addNewPostListener()`: Binds the submission handler to the new post form.
* `main()`: Orchestrates app logic on `DOMContentLoaded`.

## Design

## License

MIT