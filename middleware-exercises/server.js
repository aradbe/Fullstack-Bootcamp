const express = require("express");
const Ajv = require("ajv");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = 3000;

let totalRequestCount = 0;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [];
const comments = [];

const requestRecords = {};

function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  const startTime = Date.now();

  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);

  res.on("finish", function () {
    const executionTime = Date.now() - startTime;

    console.log(
      `[RESPONSE] ${req.method} ${req.originalUrl} ${res.statusCode} - ${executionTime}ms`,
    );
  });

  next();
}

function requestCounter(req, res, next) {
  totalRequestCount++;

  req.requestCount = totalRequestCount;

  next();
}

function responseFormatter(req, res, next) {
  res.success = function (data, statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      data: data,
    });
  };

  next();
}

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const currentTime = Date.now();
  const oneMinute = 60 * 1000;

  if (!requestRecords[ip]) {
    requestRecords[ip] = {
      count: 1,
      windowStart: currentTime,
    };

    return next();
  }

  const record = requestRecords[ip];
  const timeSinceWindowStarted = currentTime - record.windowStart;

  if (timeSinceWindowStarted >= oneMinute) {
    record.count = 1;
    record.windowStart = currentTime;

    return next();
  }

  if (record.count >= 10) {
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please try again in one minute.",
    });
  }

  record.count++;

  next();
}

function validateContentType(req, res, next) {
  const methodsThatRequireJson = ["POST", "PUT"];

  if (
    methodsThatRequireJson.includes(req.method) &&
    !req.is("application/json")
  ) {
    const error = new Error("Content-Type must be application/json");

    error.status = 415;

    return next(error);
  }

  next();
}

app.use(requestLogger);
app.use(requestCounter);
app.use(responseFormatter);
app.use(rateLimiter);
app.use(validateContentType);
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    message: "Welcome!",
    requestCount: req.requestCount,
  });
});

app.get("/about", function (req, res) {
  res.json({
    message: "This is the about page",
    requestCount: req.requestCount,
  });
});

function validateId(req, res, next) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    const error = new Error("Invalid ID format");

    error.status = 400;

    return next(error);
  }

  req.userId = id;

  next();
}

function checkResourceExists(req, res, next) {
  const user = users.find(function (currentUser) {
    return currentUser.id === req.userId;
  });

  if (!user) {
    const error = new Error("User not found");

    error.status = 404;

    return next(error);
  }

  req.user = user;

  next();
}

app.get("/users", function (req, res) {
  res.json(users);
});

app.get("/users/:id", validateId, checkResourceExists, function (req, res) {
  res.json(req.user);
});

app.post("/users", function (req, res) {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

const ajv = new Ajv({
  allErrors: true,
});

const postSchema = {
  type: "object",
  required: ["title", "content", "tags"],
  properties: {
    title: {
      type: "string",
      minLength: 5,
      maxLength: 100,
    },
    content: {
      type: "string",
      minLength: 10,
      maxLength: 1000,
    },
    category: {
      type: "string",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  additionalProperties: false,
};

const validatePostSchema = ajv.compile(postSchema);

function validatePost(req, res, next) {
  const isValid = validatePostSchema(req.body);

  if (!isValid) {
    const error = new Error("Post validation failed");

    error.status = 400;
    error.details = validatePostSchema.errors;

    return next(error);
  }

  next();
}

function validatePostId(req, res, next) {
  const postId = Number(req.params.postId);

  if (!Number.isInteger(postId) || postId <= 0) {
    const error = new Error("Invalid post ID format");

    error.status = 400;

    return next(error);
  }

  req.postId = postId;

  next();
}

function checkPostExists(req, res, next) {
  const post = posts.find(function (currentPost) {
    return currentPost.id === req.postId;
  });

  if (!post) {
    const error = new Error("Post not found");

    error.status = 404;

    return next(error);
  }

  req.post = post;

  next();
}

const commentValidationRules = [
  body("content")
    .isString()
    .withMessage("Comment content must be text")
    .isLength({ min: 5, max: 500 })
    .withMessage("Comment content must be between 5 and 500 characters"),

  body("email").isEmail().withMessage("A valid email address is required"),
];

function handleCommentValidationErrors(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Comment validation failed");

    error.status = 400;
    error.details = errors.array();

    return next(error);
  }

  next();
}

app.post("/posts", validatePost, function (req, res) {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags,
  };

  posts.push(newPost);

  res.success(newPost, 201);
});

app.get("/posts", function (req, res) {
  res.success(posts);
});

app.post(
  "/posts/:postId/comments",
  validatePostId,
  checkPostExists,
  commentValidationRules,
  handleCommentValidationErrors,
  function (req, res) {
    const newComment = {
      id: comments.length + 1,
      content: req.body.content,
      email: req.body.email,
      postId: req.postId,
    };

    comments.push(newComment);

    res.success(newComment, 201);
  },
);

app.get("/posts/:postId/comments", validatePostId, function (req, res) {
  const postComments = comments.filter(function (comment) {
    return comment.postId === req.postId;
  });

  res.success(postComments);
});

app.use(function (req, res, next) {
  const error = new Error("Route not found");

  error.status = 404;

  next(error);
});

function errorHandler(error, req, res, next) {
  console.error(error);

  let statusCode = error.status || 500;
  let message = error.message || "Internal server error";

  if (error.type === "entity.parse.failed") {
    statusCode = 400;
    message = "Invalid JSON format";
  }

  const response = {
    success: false,
    error: message,
  };

  if (error.details) {
    response.details = error.details;
  }

  res.status(statusCode).json(response);
}

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
