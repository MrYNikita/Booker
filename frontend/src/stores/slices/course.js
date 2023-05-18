/* eslint-disable no-unused-vars */
import Course from "../../classes/Course";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import courseManagmentAccounting from "../../courses/course";

const initialState = {
    course: courseManagmentAccounting,
};

export const CourseSlice = createSlice({

    name: 'course',
    initialState,
    reducers: {
        /** @arg {PayloadAction<Course>} action */
        setCourse: (state, action) => {
            state.course = action.payload;
        },
    },

});

export const { setCourse } = CourseSlice.actions;

export default CourseSlice.reducer;