import app from "./app";
import { AppDataSource } from "./database/data-source";
import config from "./utils/config/config";

(async ()=>{
    try {
        await AppDataSource.initialize();
        app.listen(config.APP_PORT||3000,()=>{
            console.log(`Server started on port: ${config.APP_PORT} 🔥🔥🔥`);
        })
    } catch (error) {
        console.log(error) // report error to the real time logging system and tag as severe
        process.exit(1);
    }
})()