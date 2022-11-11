import { Router } from "express";
import { DisplaySurveyList, 
    DisplaySurveysAddPage, 
    ProcessSurveysAddPage, 
    ProcessSurveysEditPage, 
    DisplaySurveysEditPage, 
    ProcessSurveyDeletePage } from "../controllers/surveys.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/survey-list', DisplaySurveyList);
router.get('/survey-add', DisplaySurveysAddPage);
router.post('/survey-add', ProcessSurveysAddPage);
router.post('/survey-edit/:id', ProcessSurveysEditPage);
router.get('/survey-edit/:id', DisplaySurveysEditPage);
router.get('/survey-delete/:id', ProcessSurveyDeletePage);


export default router;