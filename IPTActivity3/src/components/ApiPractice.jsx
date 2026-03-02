
import { useEffect, useState } from "react";
import axios from "axios";

function ApiPractice() {

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const [title, setTitle] = useState("");
const [body, setBody] = useState("");

const [editingId, setEditingId] = useState(null);

useEffect(() => {
document.title = "API Functionality";
fetchPosts();
}, []);

const fetchPosts = async () => {
try {
setLoading(true);
const res = await axios.get(
"https://jsonplaceholder.typicode.com/posts?_limit=3"
);
setPosts(res.data);
} catch {
setError("Failed to fetch data.");
} finally {
setLoading(false);
}
};

const handleSubmit = async (e) => {
e.preventDefault();

if (editingId) {
const res = await axios.put(
`https://jsonplaceholder.typicode.com/posts/${editingId}`,
{ title, body }
);

setPosts(posts.map(p => p.id === editingId ? res.data : p));
setEditingId(null);
} else {
const res = await axios.post(
"https://jsonplaceholder.typicode.com/posts",
{ title, body }
);

setPosts([res.data, ...posts]);
}

setTitle("");
setBody("");
};

const handleEdit = (post) => {
setEditingId(post.id);
setTitle(post.title);
setBody(post.body);
};

const handleDelete = async (id) => {
await axios.delete(
`https://jsonplaceholder.typicode.com/posts/${id}`
);
setPosts(posts.filter(p => p.id !== id));
};

return (
<div className="flex justify-center px-4 py-10">
<div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 space-y-8">

<h1 className="text-2xl font-bold text-center">
API Functionality
</h1>

{loading && <p className="text-blue-600">Loading...</p>}
{error && <p className="text-red-600">{error}</p>}

<form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl space-y-4">

<input
className="w-full border rounded-lg p-3"
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>

<textarea
className="w-full border rounded-lg p-3"
placeholder="Body"
value={body}
onChange={(e) => setBody(e.target.value)}
/>

<button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
{editingId ? "Update" : "Submit"}
</button>

</form>

<table className="w-full border">
<thead className="bg-gray-100">
<tr>
<th className="p-3 text-left">Title</th>
<th className="p-3 text-left">Body</th>
<th className="p-3 text-center">Actions</th>
</tr>
</thead>

<tbody>
{posts.map(post => (
<tr key={post.id} className="border-t">
<td className="p-3">{post.title}</td>
<td className="p-3">{post.body}</td>
<td className="p-3 flex justify-center gap-2">
<button
onClick={() => handleEdit(post)}
className="bg-yellow-500 text-white px-3 py-1 rounded"
>
Edit
</button>

<button
onClick={() => handleDelete(post.id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>

</div>
</div>
);
}

export default ApiPractice;