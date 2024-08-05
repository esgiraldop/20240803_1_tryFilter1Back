"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // For instantiating classes with container
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = require("./config/cors");
const cors_2 = __importDefault(require("cors"));
const errorHandler_middleware_1 = __importDefault(require("./middlewares/errorHandler.middleware"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_2.default)(cors_1.corsOption));
app.use(express_1.default.json());
app.use('/api', router_1.default);
app.use(errorHandler_middleware_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate();
        console.log("Connection to database established");
        // await sequelizeConfig.sync({force:true}); // Recreates tables every time the server is started
        // await sequelizeConfig.sync({alter:true}); // Alter tables instead of dropping them
        yield db_1.default.sync();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.log("Error: ", error);
    }
});
startServer();
