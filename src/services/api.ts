// frontend/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SkillCardType,
  AboutMeType,
  SocialType,
  ProjectType,
  ContactFormType,
} from "@/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  endpoints: (builder) => ({
    getSkills: builder.query<SkillCardType[], void>({
      query: () => "skills/",
    }),
    getAboutMe: builder.query<AboutMeType, void>({
      query: () => "about/",
    }),
    getSocial: builder.query<SocialType[], void>({
      query: () => "socials/",
    }),
    getProjects: builder.query<ProjectType[], void>({
      query: () => "projects/",
    }),
    submitContactForm: builder.mutation<void, ContactFormType>({
      query: (formData) => ({
        url: "contacts/",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useGetAboutMeQuery,
  useGetSocialQuery,
  useGetProjectsQuery,
  useSubmitContactFormMutation,
} = apiSlice;
