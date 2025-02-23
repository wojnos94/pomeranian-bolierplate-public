import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/CV';
import { Calendar } from './App/Calendar';
import { Settings } from './App/Settings';
import { Blog } from './App/Blog/Blog';
import { Faq } from './App/Faq';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="faq/*" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
          <Route path="blog/*" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
