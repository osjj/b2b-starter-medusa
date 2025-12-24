import { MiddlewareRoute, validateAndTransformBody } from "@medusajs/framework";
import multer from "multer";
import path from "path";
import fs from "fs";
import { CreateSimpleQuoteSchema } from "./validators";

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), "uploads", "simple-quotes");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (_req, file, cb) => {
    // Allow common file types
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

// Middleware to parse multipart form data
const parseMultipartBody = (req: any, _res: any, next: any) => {
  // If body contains cart_items as string, parse it
  if (req.body && typeof req.body.cart_items === "string") {
    try {
      req.body.cart_items = JSON.parse(req.body.cart_items);
    } catch {
      // Keep as is if parsing fails
    }
  }
  next();
};

export const simpleQuotesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/store/simple-quotes",
    method: "POST",
    middlewares: [
      upload.single("file"),
      parseMultipartBody,
      validateAndTransformBody(CreateSimpleQuoteSchema),
    ],
  },
];
