import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Routes with a parameter (:id) can't be prerendered without a list of ids,
  // so this one is rendered in the browser instead.
  {
    path: 'students/:id',
    renderMode: RenderMode.Client
  },
  // Every other route is prerendered at build time.
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];