import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('*/api/v1/cities/search', ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('q')

    if (query === 'Kitwe') {
      return HttpResponse.json([
        { name: 'Kitwe', population: 522000, is_capital: false, area_km2: null, province: 'Copperbelt'}
      ])
    }
    return HttpResponse.json([])
  }),
]