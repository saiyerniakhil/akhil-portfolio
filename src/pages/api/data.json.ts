import type {APIRoute} from "astro";
import { socialLinks, personalInfo } from '../../data/social-links';
import {workExperience} from "../../data/work-experience.ts";
import {skills} from "../../data/skills.ts";

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify(
            {
                personalInfo,
                socialLinks,
                workExperience,
                skills
            }
        )
    )
}