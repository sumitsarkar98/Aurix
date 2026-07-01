// <---- using async-await ---->

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    const status = error.statuscode || error.statusCode || 500;
    const payload = {
      success: false,
      message: error.message || "Internal Server Error",
    };

    if (error.errors) payload.errors = error.errors;
    if (process.env.NODE_ENV !== "production" && error.stack)
      payload.stack = error.stack;

    return res.status(status).json(payload);
  }
};

export { asyncHandler };
