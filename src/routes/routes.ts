import { Router } from "express";

import * as Page from '../controllers/PageController';
import * as Search from '../controllers/SearchController';

const router = Router();

router.get('/', Page.home);
router.get('/dogs', Page.dogs);
router.get('/cats', Page.cats);
router.get('/fishes', Page.fishes);

router.get('/search', Search.search);

export default router;