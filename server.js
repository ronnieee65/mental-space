const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const firebase = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const { getFirestore, collection, addDoc, getDocs, query, where, orderBy, doc, getDoc, updateDoc, increment, serverTimestamp } = require('firebase/firestore');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(__dirname)); // Serve static files from current directory

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD3o-5boVy0ONh0jh-h9BBwlIv_s24lnfI",
    authDomain: "mentalspace-7639f.firebaseapp.com",
    projectId: "mentalspace-7639f",
    storageBucket: "mentalspace-7639f.firebasestorage.app",
    messagingSenderId: "426015805993",
    appId: "1:426015805993:web:a839eea64269b51987c238",
    measurementId: "G-8JJ7JDHQBP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Routes for serving HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/forums.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'forums.html'));
});

app.get('/articles.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'articles.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// API Routes

// User registration
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Create user document in Firestore
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: name,
      email: email,
      isProfessional: false,
      createdAt: serverTimestamp()
    });
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: error.message });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  try {
    // Sign in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get ID token for client auth
    const idToken = await user.getIdToken();
    
    // Get user details from Firestore
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);
    
    let userData = null;
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });
    
    // Send user data for client-side storage
    res.status(200).json({
      message: 'Login successful',
      user: {
        uid: user.uid,
        email: user.email,
        name: userData?.name || 'User',
        isProfessional: userData?.isProfessional || false,
        token: idToken
      }
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// User logout
app.get('/api/logout', async (req, res) => {
  try {
    await signOut(auth);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error signing out:', error);
    res.status(500).json({ message: 'Error signing out' });
  }
});

// Get all forum posts
app.get('/api/posts', async (req, res) => {
  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt ? doc.data().createdAt.toDate() : new Date()
      });
    });
    
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get posts by category
app.get('/api/posts/:category', async (req, res) => {
  const { category } = req.params;
  
  try {
    let q;
    const postsRef = collection(db, 'posts');
    
    if (category !== 'all') {
      q = query(postsRef, where('category', '==', category), orderBy('createdAt', 'desc'));
    } else {
      q = query(postsRef, orderBy('createdAt', 'desc'));
    }
    
    const querySnapshot = await getDocs(q);
    
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt ? doc.data().createdAt.toDate() : new Date()
      });
    });
    
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create a new post
app.post('/api/posts', async (req, res) => {
  const { content, category, tags, idToken } = req.body;
  
  if (!content || !category || !idToken) {
    return res.status(400).json({ message: 'Content, category, and authentication are required' });
  }
  
  try {
    // Get user ID from token
    const decodedToken = await auth.currentUser.getIdTokenResult();
    const uid = auth.currentUser.uid;
    
    // Get user details
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    
    let userData = null;
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });
    
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Create post
    const newPost = {
      content,
      category,
      tags: tags || [],
      authorId: uid,
      authorName: userData.name,
      isProfessionalPost: userData.isProfessional || false,
      createdAt: serverTimestamp(),
      comments: 0,
      views: 0
    };
    
    const postRef = await addDoc(collection(db, 'posts'), newPost);
    
    res.status(201).json({
      id: postRef.id,
      ...newPost,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Add a comment to a post
app.post('/api/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  const { content, idToken } = req.body;
  
  if (!content || !idToken) {
    return res.status(400).json({ message: 'Content and authentication are required' });
  }
  
  try {
    // Get user ID from token
    const decodedToken = await auth.currentUser.getIdTokenResult();
    const uid = auth.currentUser.uid;
    
    // Get user details
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    
    let userData = null;
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });
    
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Check if post exists
    const postRef = doc(db, 'posts', postId);
    const postSnap = await getDoc(postRef);
    
    if (!postSnap.exists()) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    // Create comment
    const newComment = {
      content,
      authorId: uid,
      authorName: userData.name,
      postId,
      createdAt: serverTimestamp()
    };
    
    const commentRef = await addDoc(collection(db, 'comments'), newComment);
    
    // Update post's comment count
    await updateDoc(postRef, {
      comments: increment(1)
    });
    
    res.status(201).json({
      id: commentRef.id,
      ...newComment,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Get comments for a post
app.get('/api/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  
  try {
    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, where('postId', '==', postId), orderBy('createdAt', 'asc'));
    const querySnapshot = await getDocs(q);
    
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt ? doc.data().createdAt.toDate() : new Date()
      });
    });
    
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: error.message });
  }
});

// Search posts by content, author name, or tags
app.get('/api/search', async (req, res) => {
  const { term } = req.query;
  
  if (!term) {
    return res.status(400).json({ message: 'Search term is required' });
  }
  
  try {
    const searchTerm = term.toLowerCase();
    
    // Get all posts - we need to do client-side filtering since Firestore 
    // doesn't support complex text search across multiple fields
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const posts = [];
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      const content = postData.content?.toLowerCase() || '';
      const authorName = postData.authorName?.toLowerCase() || '';
      const tags = postData.tags || [];
      
      // Check if search term is in content, author name, or tags
      if (content.includes(searchTerm) || 
          authorName.includes(searchTerm) || 
          tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
        posts.push({
          id: doc.id,
          ...postData,
          createdAt: postData.createdAt ? postData.createdAt.toDate() : new Date()
        });
      }
    });
    
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error searching posts:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get all articles - Reference external module for article data
app.get('/api/articles', (req, res) => {
  try {
    // Import article data from a separate module
    const articlesData = require('./articles');
    
    // Return articles
    res.status(200).json(articlesData.getArticles());
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get articles by category - Reference external module for article data
app.get('/api/articles/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    
    // Import article data from a separate module
    const articlesData = require('./articles');
    
    // Get and filter articles by category
    const articles = articlesData.getArticlesByCategory(category);
    
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get article by ID - Reference external module for article data
app.get('/api/articles/:articleId', (req, res) => {
  try {
    const { articleId } = req.params;
    
    // Import article data from a separate module
    const articlesData = require('./articles');
    
    // Get article by ID
    const article = articlesData.getArticleById(articleId);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});