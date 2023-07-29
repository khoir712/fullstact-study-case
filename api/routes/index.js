import { Router } from "express";
const route = Router();

const localHost = `api`;

route.get(`/${localHost}`, (req, res) => {
  res.status(200).json({
    message: "Home Page",
  });
});

import authorRoutes from "./author";
// import bookRoutes from './book'
// import profileRoutes from './profile'
// import genreRoutes from './genre'
// import userRoutes from './user'

route.use(`/${localHost}/authors`, authorRoutes);
// route.use(`/${localHost}/books`, bookRoutes)
// route.use(`/${localHost}/genres`, genreRoutes)
// route.use(`/${localHost}/users`, userRoutes)
// route.use(`/${localHost}/profiles`, profileRoutes)

export default route;
