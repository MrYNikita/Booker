import { configureStore } from '@reduxjs/toolkit';
import CourseSlice from './slices/course';

export const store = configureStore({
    reducer: {
        course: CourseSlice,
    },
});