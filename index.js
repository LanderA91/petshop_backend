import express from 'express';
import cors from "cors";
const app = express();

import seedRouter from "./seed/seed.route.js"
import classesRouter from "./classes/classes.route.js";
import usersRouter from "./users/user.route.js";
import favoritesRouter from "./favorites/favorites.route.js";
import ratingsRouter from "./ratings/ratings.route.js";
import commentsRouter from "./comments/comments.route.js";
import salesRouter from "./sales/sales.route.js";
import sales_detailRouter from "./sales_detail/sales_detail.route.js";

app.use(cors());
app.use(express.json());

app.use("/seed", seedRouter);
app.use('/api/v1', usersRouter);
app.use('/api/v1', classesRouter);
app.use('/api/v1', favoritesRouter);
app.use('/api/v1', ratingsRouter);
app.use('/api/v1', commentsRouter);
app.use('/api/v1', salesRouter);
app.use('/api/v1', sales_detailRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log("servidor listo en http://localhost: " + PORT);
});


export default app