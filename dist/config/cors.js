"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOption = void 0;
exports.corsOption = {
    // origin: "http://localhost:3001",
    origin: "http://127.0.0.1:5500",
    methods: "GET, POST",
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};