import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NOTES_API } from "../../data/apiUrl";

export const noteApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: NOTES_API }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    getAllNotes: builder.query({
      query: () => "/note",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Notes"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/note/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Notes"],
    }),
    addNote: builder.mutation({
      query: (payload) => ({
        url: "/note",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Notes"],
    }),
    getSubNotes: builder.mutation({
      query: (id) => ({
        url: `/subnote/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const {
  useGetAllNotesQuery,
  useDeleteNoteMutation,
  useAddNoteMutation,
  useGetSubNotesMutation,
} = noteApiSlice;
